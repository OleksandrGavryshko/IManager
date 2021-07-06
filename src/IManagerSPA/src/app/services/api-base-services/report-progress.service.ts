import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ReportProgressService implements OnInit {
  private _status: Subject<boolean> = new Subject<boolean>();
  private _reportProgressDto: Subject<ReportProgressDto
  > = new Subject<ReportProgressDto
  >();

  constructor() {}

  public status(): Observable<boolean> {
    return this._status.asObservable();
  }

  public enable() {
    this._status.next(true);
  }

  public disable() {
    this._status.next(false);
  }

  public newValue(value: ReportProgressDto
    ) {
    this._reportProgressDto.next(value);
  }

  public data(): Observable<ReportProgressDto
  > {
    return this._reportProgressDto.asObservable();
  }

  ngOnInit(): void {
  }
}

export class ReportProgressDto
 {
  public loaded: number;
  public total: number | undefined;

  constructor(loaded: number, total: number | undefined) {
    this.loaded = loaded;
    this.total = total;
  }

  public getPercentDone(): number | null {
    if (this.loaded && this.total) {
      return Math.round((100 * this.loaded) / this.total);
    } else {
      return null;
    }
  }
}
