import { Component, OnInit } from '@angular/core';
import { Link } from 'src/shared/models/link';

@Component({
  selector: 'app-personal-profiles',
  templateUrl: './personal-profiles.component.html',
  styleUrls: ['./personal-profiles.component.scss']
})
export class PersonalProfilesComponent implements OnInit {
  links: Link[] = [
    {name: 'About', url: '#'},
    {name: 'Project', url: '#'},
    {name: 'Contact', url: '#'}
  ]
  activeLinkByName: string = 'About';
  
  constructor() { }

  ngOnInit() {
  }

  navigateUrl(linkName: string) {
    this.activeLinkByName = linkName;
  }
}
