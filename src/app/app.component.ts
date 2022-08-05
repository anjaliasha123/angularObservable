import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  dataStatus: any;
  dataStatus2: any;
  observableOb: Observable<any>;
  ngOnInit(): void {
    this.observableOb = new Observable((observer) => {
      setTimeout(() => {
        observer.next("In Progress");
      }, 2000);
      setTimeout(() => {
        observer.next("Processing....");
      }, 4000);
      setTimeout(() => {
        observer.next("Completed");
      }, 8000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
    });

    this.observableOb.subscribe((val) => {
      this.dataStatus = val;
    });
    this.observableOb.subscribe((val2) => {
      this.dataStatus2 = val2;
    });
  }
}
