import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  datas: any = [];
  _datas: any = [];
  constructor(private dataService: DataService) {

  }

  providers: any = ['Reset'];

  provider;

  universities: any = ['Reset'];

  university;

  subjects: any = ['Reset'];

  subject;

  chsubjects: any = ['Reset'];

  chsubject;


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      (response) => {
        this._datas = response;
        this.datas = this._datas;
        this.fillAll();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  fillProviders(upflag?) {
    if (upflag) {
      for (let key of this._datas) {
        if (key["Provider"] !== "") {
          if (this.providers.includes(key["Provider"]) === false) {
            this.providers.push(key["Provider"]);
          }
        }
      }
    }
    else {
      for (let key of this.datas) {
        if (key["Provider"] !== "") {
          if (this.providers.includes(key["Provider"]) === false) {
            this.providers.push(key["Provider"]);
          }
        }
      }
    }

  }

  fillUniversities(upflag?) {
    if (upflag) {
      for (let key of this._datas) {
        if (key.Universities.Institutions !== "") {
          if (this.universities.includes(key.Universities.Institutions) === false) {
            this.universities.push(key.Universities.Institutions);
          }
        }
      }
    } else {
      for (let key of this.datas) {
        if (key.Universities.Institutions !== "") {
          if (this.universities.includes(key.Universities.Institutions) === false) {
            this.universities.push(key.Universities.Institutions);
          }
        }
      }
    }
  }

  fillSubjects(upflag?) {
    if (upflag) {
      for (let key of this._datas) {
        if (key["Parent Subject"] !== "") {
          if (this.subjects.includes(key["Parent Subject"]) === false) {
            this.subjects.push(key["Parent Subject"]);
          }
        }
      }
    } else {
      for (let key of this.datas) {
        if (key["Parent Subject"] !== "") {
          if (this.subjects.includes(key["Parent Subject"]) === false) {
            this.subjects.push(key["Parent Subject"]);
          }
        }
      }
    }

  }

  fillChSubjects(upflag?) {
    if (upflag) {
      for (let key of this._datas) {
        if (key["Child Subject"] !== "") {
          if (this.chsubjects.includes(key["Child Subject"]) === false) {
            this.chsubjects.push(key["Child Subject"]);
          }
        }
      }
    } else {
      for (let key of this.datas) {
        if (key["Child Subject"] !== "") {
          if (this.chsubjects.includes(key["Child Subject"]) === false) {
            this.chsubjects.push(key["Child Subject"]);
          }
        }
      }
    }
  }

  fillAll(upflag?) {
    this.providers = this.providers.slice(0, 1);
    this.universities = this.universities.slice(0, 1);
    this.subjects = this.subjects.slice(0, 1);
    this.chsubjects = this.chsubjects.slice(0, 1);
    this.fillProviders(upflag);
    this.fillUniversities(upflag);
    this.fillSubjects(upflag);
    this.fillChSubjects(upflag);
  }

  update() {
    if (
      this.chsubject === undefined &&
      this.provider === undefined &&
      this.university === undefined &&
      this.subject !== undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(x => x["Parent Subject"] === this.subject);
      this.fillAll();
    } else if (
      this.chsubject === undefined &&
      this.provider === undefined &&
      this.university !== undefined &&
      this.subject === undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x => x.Universities["Institutions"] === this.university
      );
      this.fillAll();
    } else if (
      this.chsubject === undefined &&
      this.provider === undefined &&
      this.university !== undefined &&
      this.subject !== undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x.Universities["Institutions"] === this.university &&
          x["Parent Subject"] === this.subject
      );
      this.fillAll();
    } else if (
      this.chsubject === undefined &&
      this.provider !== undefined &&
      this.university === undefined &&
      this.subject === undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(x => x["Provider"] === this.provider);
      this.fillAll();
    } else if (
      this.chsubject === undefined &&
      this.provider !== undefined &&
      this.university === undefined &&
      this.subject !== undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x => x["Provider"] === this.provider && x["Parent Subject"] === this.subject
      );
      this.fillAll();
    } else if (
      this.chsubject === undefined &&
      this.provider !== undefined &&
      this.university !== undefined &&
      this.subject === undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Provider"] === this.provider &&
          x.Universities["Institutions"] === this.university
      );
      this.fillAll();
    } else if (
      this.chsubject === undefined &&
      this.provider !== undefined &&
      this.university !== undefined &&
      this.subject !== undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Provider"] === this.provider &&
          x.Universities["Institutions"] === this.university &&
          x["Parent Subject"] === this.subject
      );
      this.fillAll();
    } else if (
      this.chsubject !== undefined &&
      this.provider === undefined &&
      this.university === undefined &&
      this.subject === undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(x => x["Child Subject"] === this.chsubject);
      this.fillAll();
    } else if (
      this.chsubject !== undefined &&
      this.provider === undefined &&
      this.university === undefined &&
      this.subject !== undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Child Subject"] === this.chsubject &&
          x["Parent Subject"] === this.subject
      );
      this.fillAll();
    } else if (
      this.chsubject !== undefined &&
      this.provider === undefined &&
      this.university !== undefined &&
      this.subject === undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Child Subject"] === this.chsubject &&
          x.Universities["Institutions"] === this.university
      );
      this.fillAll();
    } else if (
      this.chsubject !== undefined &&
      this.provider === undefined &&
      this.university !== undefined &&
      this.subject !== undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Child Subject"] === this.chsubject &&
          x.Universities["Institutions"] === this.university &&
          x["Parent Subject"] === this.subject
      );
      this.fillAll();
    } else if (
      this.chsubject !== undefined &&
      this.provider !== undefined &&
      this.university === undefined &&
      this.subject === undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Child Subject"] === this.chsubject && x["Provider"] === this.provider
      );
      this.fillAll();
    } else if (
      this.chsubject !== undefined &&
      this.provider !== undefined &&
      this.university === undefined &&
      this.subject !== undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Child Subject"] === this.chsubject &&
          x["Provider"] === this.provider &&
          x["Parent Subject"] === this.subject
      );
      this.fillAll();
    } else if (
      this.chsubject !== undefined &&
      this.provider !== undefined &&
      this.university !== undefined &&
      this.subject === undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Child Subject"] === this.chsubject &&
          x["Provider"] === this.provider &&
          x.Universities["Institutions"] === this.university
      );
      this.fillAll();
    } else if (
      this.chsubject !== undefined &&
      this.provider !== undefined &&
      this.university !== undefined &&
      this.subject !== undefined
    ) {
      this.datas = [];
      this.datas = this._datas.filter(
        x =>
          x["Child Subject"] === this.chsubject &&
          x["Provider"] === this.provider &&
          x.Universities["Institutions"] === this.university &&
          x["Parent Subject"] === this.subject
      );
      this.fillAll();
    } else {
      this.datas = [];
      this.datas = this._datas;
      this.fillAll(true);
    }
  }
}
