import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorradoresPage } from './borradores.page';

describe('BorradoresPage', () => {
  let component: BorradoresPage;
  let fixture: ComponentFixture<BorradoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorradoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorradoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
