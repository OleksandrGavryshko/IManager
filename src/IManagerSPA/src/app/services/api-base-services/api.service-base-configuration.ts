import { Injectable } from '@angular/core';
import { ReportProgressService } from './report-progress.service';

@Injectable()
export class ServiceBaseConfiguration {
  constructor(
    public reportProgressService: ReportProgressService
    ) { }
}
