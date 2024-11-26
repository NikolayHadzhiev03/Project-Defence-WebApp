import { Component } from '@angular/core';
import { ThemeListComponent } from '../theme/theme-list/theme-list.component';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThemeListComponent,PostListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
