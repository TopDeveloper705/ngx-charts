import {
  TestBed,
  async
} from '@angular/core/testing';
import { Component  } from '@angular/core';
import d3 from '../../d3';
import '../../../config/testing-utils';

import { ChartCommonModule } from '../chart-common.module';
import { ColorHelper } from '../color.helper';

// some test data (includes just enought data to run the tests)
let seriesData = ['complete', 'not complete'];

@Component({
  selector: 'test-component',
  template: ''
})
class TestComponent {
  seriesData: any = seriesData;
  legendTitle: string = 'Test legend title';
  colors: any;
  legendHeight: number;

  constructor() {
    let scheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
    this.colors = new ColorHelper(scheme, 'ordinal', [], null);
  }
}

describe('<ngx-charts-legend>', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ChartCommonModule]
    });

    TestBed.overrideComponent(TestComponent, {
      set: {
        template: `
                <ngx-charts-legend                
                  [title]="legendTitle"
                  [colors]="colors"
                  [data]="seriesData"
                  [height]="legendHeight">
                </ngx-charts-legend>
            `
      }
    });
  });

  it('should set the legend labels', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();

      let labelsElement = fixture.debugElement.nativeElement.querySelector('.legend-labels');

      expect(labelsElement).toBeDefined();
      expect(labelsElement.childElementCount).toEqual(2); // 2 legend labels


      expect(labelsElement.children[0]).toContainText('complete');
      expect(labelsElement.children[1]).toContainText('not complete');

    });
  }));
});
