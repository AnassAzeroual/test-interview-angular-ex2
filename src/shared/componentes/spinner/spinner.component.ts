import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {GlobalService} from "../../services/global.service";
import { NgIf } from '@angular/common';

@Component({
  selector: 'shared-spinner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  isShow = false;

  constructor(private srv: GlobalService) {
    srv.currentState$
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: boolean) => {
        if (state == false) {
          setTimeout(() => { // setTimeout just for delaying Spinner
            this.isShow = state;
          }, 500);
        }else{
          this.isShow = state;
        }
      });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
