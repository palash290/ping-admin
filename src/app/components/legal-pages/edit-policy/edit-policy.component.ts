import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit-policy',
  imports: [RouterLink, CKEditorModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-policy.component.html',
  styleUrl: './edit-policy.component.css'
})
export class EditPolicyComponent {

  public Editor: any = ClassicEditor;
  public content = '';
  public editorConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'fontSize',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'undo',
        'redo'
      ]
    },
    fontSize: {
      options: [
        12,
        14,
        16,
        18,
        20,
        24,
        28,
        'default'
      ]
    },
    image: {
      toolbar: []
    }
  };

  
}
