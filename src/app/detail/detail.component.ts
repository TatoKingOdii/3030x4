import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {Planet} from "../data/Planet";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    NgIf,
    FormsModule,
    MatFormField,
    MatCardContent,
    MatInput,
    MatCardActions,
    MatButton,
    MatCheckbox
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  title = 'Select a Planet or create a new one!';
  @Input() selectedContent?: Planet;
  @Input() contentList?: Planet[] = [];
  @Output() onContentSave = new EventEmitter<Planet>;
  localContent: Planet = this.getDefaultContent()

  ngOnChanges(changes: SimpleChanges) {
    let newContent = changes['selectedContent'] && changes['selectedContent'].currentValue;
    if (newContent) {
      this.localContent = {
        id: newContent.id,
        name: newContent.name,
        composition: newContent.composition,
        color: newContent.color,
        distanceFromSun: newContent.distanceFromSun,
        habitable: newContent.habitable
      };
    } else {
      this.reset();
    }
  }

  createContent(createdContent?: Planet) {
    console.log("Creating Content: " + JSON.stringify(createdContent))

    if (this.contentList && createdContent) {
      this.contentList.push({
        id: Math.random(),
        name: createdContent.name,
        composition: createdContent.composition,
        color: createdContent.color,
        distanceFromSun: createdContent.distanceFromSun,
        habitable: createdContent.habitable
      })

      this.reset();
    }
  }

  saveContent(updatedContent?: Planet) {
    console.log("Update for: " + JSON.stringify(updatedContent))

    if (this.contentList && updatedContent) {
      let idx: number = this.contentList.findIndex(content => content.id == updatedContent.id);

      if (idx !== -1) {
        this.onContentSave.emit(updatedContent);
        this.contentList[idx] = {
          id: updatedContent.id,
          name: updatedContent.name,
          composition: updatedContent.composition,
          color: updatedContent.color,
          distanceFromSun: updatedContent.distanceFromSun,
          habitable: updatedContent.habitable
        }
      } else {
        this.createContent(updatedContent);
      }

      // Maybe
      this.reset();
    }
  }

  reset() {
    this.localContent = this.getDefaultContent();
  }

  private getDefaultContent() : Planet {
    return {
      id: -1,
      name: '',
      composition: '',
      color: '',
      distanceFromSun: undefined,
      habitable: false
    }
  }
}
