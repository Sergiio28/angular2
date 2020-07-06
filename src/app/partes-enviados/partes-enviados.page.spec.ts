import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartesEnviadosPage } from './partes-enviados.page';

describe('PartesEnviadosPage', () => {
  let component: PartesEnviadosPage;
  let fixture: ComponentFixture<PartesEnviadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartesEnviadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartesEnviadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
