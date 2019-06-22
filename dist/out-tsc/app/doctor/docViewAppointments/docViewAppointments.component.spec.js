/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { DocViewAppointmentsComponent } from './docViewAppointments.component';
describe('DocViewAppointmentsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DocViewAppointmentsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DocViewAppointmentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=docViewAppointments.component.spec.js.map