import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoPartePage } from './nuevo-parte.page';

describe('NuevoPartePage', () => {
  let component: NuevoPartePage;
  let fixture: ComponentFixture<NuevoPartePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPartePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoPartePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
