import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PatientCat } from '../../_models/';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; 

const INITIAL_STATE = { patientType: null, patientMainType: null,billServiceCode:null ,id:null};

@Component({
  selector: 'patient-category-view',
  templateUrl: './patient-category.component.html',
  styleUrls: ['./patient-category.component.css']
})

export class PatientCategoryComponent implements OnInit {
 PatientCats: PatientCat[] = [];
  active: PatientCat;
  baseUrl = 'https://json-server-now-xpvrtnzwtw.now.sh';
 

  constructor(private http: HttpClient) {
    // console.log ('environment:', env);
    this.active = INITIAL_STATE;
    this.getAll();
  }

  getAll() {
    this.http.get<PatientCat[]>(`${this.baseUrl}/patient_categories`)
      .subscribe(result => this.PatientCats = result)
  }

  setActiveHandler(PatientCat: PatientCat) {
    //console.log( PatientCat )
    this.active = Object.assign({}, PatientCat);
  }

  save(form: NgForm) {
    if (this.active.id) {
      this.edit(form.value);
    } else {
      this.add(form.value);
      form.reset();
    }
  }

  add(PatientCat: PatientCat) {
    this.http.post<PatientCat>(`${this.baseUrl}/patient_categories`, PatientCat)
      .subscribe(res => {
        this.PatientCats.push(res)
        this.reset();
      })
  }

  edit(PatientCat: PatientCat) {
    const newPatientCat = Object.assign(
      {},
      this.active,
      PatientCat
    );

    this.http.patch<PatientCat>(`${this.baseUrl}/patient_categories/${newPatientCat.id}`, newPatientCat )
      .subscribe(
        res => {
          const index = this.PatientCats.findIndex(d => d.id === newPatientCat.id) ;
          this.PatientCats[index] = newPatientCat;
        }
      )
  }

  delete(PatientCat: PatientCat) {
    this.http.delete<any>(`${this.baseUrl}/patient_categories/${PatientCat.id}`)
      .subscribe(
        () => {
          const index = this.PatientCats.indexOf(PatientCat)
          this.PatientCats.splice(index, 1);
          this.reset();
        }
      )
  }

  reset() {
    this.active = INITIAL_STATE;
  }

  ngOnInit() {
  }

}