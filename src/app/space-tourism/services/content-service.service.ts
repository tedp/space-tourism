import { Injectable } from '@angular/core';
import * as contentData from './data';

export interface Content {
  name: string;
}

export interface Images {
  png: string;
  webp: string;
}
interface ImagesWithOrientation {
  portrait: string;
  landscape: string;
}

export interface Destination extends Content {
  images: Images;
  description: string;
  distance: string;
  travel: string;
}

export interface Crew extends Content {
  images: Images;
  role: string;
  bio: string;
}

export interface Technology extends Content {
  images: ImagesWithOrientation;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentServiceService {
  constructor() {}

  getDestinationData(name: string): Destination {
    return contentData.destinations.find((dest) => dest.name === name)!;
  }
}
