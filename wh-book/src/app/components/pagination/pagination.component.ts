import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent {
  pagesList = [1, 2, 3, 4, 5]

}
