import { async, TestBed } from '@angular/core/testing';
import { TesteEnvioDadosComponent } from './teste-envio-dados.component';
describe('TesteEnvioDadosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TesteEnvioDadosComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TesteEnvioDadosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=teste-envio-dados.component.spec.js.map