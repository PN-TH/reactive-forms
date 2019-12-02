import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from './article.service';
import { refValidator } from './ref';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  
  articleForm = this.fb.group({
    ref: ['', [Validators.required, refValidator]],
    name: [''],
    price: [''],
    });
  
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }
  onSubmit() {
    console.log(this.articleForm.value);
  }
}
