/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { AddDoctorComponent } from './addDoctor.component';
describe('AddDoctorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AddDoctorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddDoctorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=addDoctor.component.spec.js.map