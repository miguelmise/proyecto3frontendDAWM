import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Modelo } from 'src/app/interfaces/modelo';
import { ModeloService } from 'src/app/services/modelo.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  
  listModelos: Modelo[] = [];

  displayedColumns: string[] = ['position', 'marca', 'modelo', 'fecha','acciones'];
  dataSource! : MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _modeloService: ModeloService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarModelos();
  }

  eliminarModelo(index: number){
    this._modeloService.eliminarModelo(index);
    this.cargarModelos();

    
      this._snackBar.open('Modelo Eliminado','',{
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    

  }

  cargarModelos(){
    this.listModelos = this._modeloService.getModelos();
    this.dataSource = new MatTableDataSource(this.listModelos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
