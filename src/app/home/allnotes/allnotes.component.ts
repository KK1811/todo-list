import { Component, OnInit } from '@angular/core';
import { GetNotesService } from 'src/app/service/get-notes.service';


@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {

  constructor(private notesService:GetNotesService) { }

  ngOnInit() {
    this.getNotes()
  }

  notes=[]

  getNotes(){
    this.notesService.getAllNotes().subscribe(data=>{
      this.notes=data
      console.log(this.notes)
    })
  }

}
