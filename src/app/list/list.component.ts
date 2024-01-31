import {Component, Input} from '@angular/core';
import {Planet} from "../data/Planet";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatActionList, MatListItem} from "@angular/material/list";
import {NgClass, NgForOf} from "@angular/common";
import {MatLine} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {DetailComponent} from "../detail/detail.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatActionList,
    MatCardContent,
    NgForOf,
    MatLine,
    MatListItem,
    MatIcon,
    MatButton,
    DetailComponent,
    NgClass
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  title = 'Known Planets';
  @Input() contentList?: Planet[];
  currentContent?: Planet;

  selectContent(selectedContent: Planet) {
    this.currentContent = selectedContent;
  }

  deleteContent(deletedContent: Planet) {
    if (this.contentList && deletedContent) {
      let idx: number = this.contentList.findIndex(content => content.id == deletedContent.id);

      console.log("Delete index found: " + idx);
      if (idx !== -1) {
        this.contentList.splice(idx, 1);
      }
    }
    this.currentContent = undefined;
  }

  handleContentUpdate(contentEvent: Planet) {
    // Just a test of sending something back to the list component
    console.log("Event Update for Content Received: " + JSON.stringify(contentEvent))
  }
}
