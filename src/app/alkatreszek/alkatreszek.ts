import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AlkatreszService} from '../services/alkatresz.service';
import {AlkatreszDto} from '../models/alkatresz.dto';
import {MatCell, MatColumnDef, MatHeaderCell, MatHeaderRow, MatRow, MatTable} from '@angular/material/table';

@Component({
  selector: 'app-alkatreszek',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow
  ],
  templateUrl: './alkatreszek.html',
  styleUrl: './alkatreszek.css',
})
export class Alkatreszek implements OnInit {

  constructor(private alkatreszService: AlkatreszService, private dialog: MatDialog) {
  }

  alkatreszek: AlkatreszDto[] = [];
  displayedColumns: string[] = ['id','nev','tipus','meret','gyarto'];

  ngOnInit(): void {
    this.alkatreszService.getAllAlkatresz().subscribe(data=> this.alkatreszek = data);
  }



}
