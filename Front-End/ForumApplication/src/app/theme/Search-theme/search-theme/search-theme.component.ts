import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiServiceService } from '../../../../services/api-service.service';
import { Theme } from '../../../../models/theme';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-theme',
  standalone: true,
  imports: [RouterLink, FormsModule,DatePipe],
  templateUrl: './search-theme.component.html',
  styleUrls: ['./search-theme.component.css']
})
export class SearchThemeComponent implements OnInit {
  Themes: Theme[] = [];
  filteredThemes: Theme[] = [];

  constructor(private apiService: ApiServiceService) {}
   notExistingTheme : boolean = true;
  ngOnInit(): void {
    this.apiService.getThemes().subscribe(themes => {
      this.Themes = themes;
    });
  }

  onSearch(form: NgForm)  {
    const {searchText }  = form.value;
    if (searchText) {
      this.filteredThemes = this.Themes.filter(theme =>
        theme.themeName.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }
}
