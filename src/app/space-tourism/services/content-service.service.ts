import { Injectable } from '@angular/core';
import * as _ from 'lodash';
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

export type DestinationNames = 'Moon' | 'Mars' | 'Europa' | 'Titan';

export interface Destination {
  name: DestinationNames;
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

  getBackgroundImage(
    url: string,
    orientation: 'portrait' | 'landscape' = 'portrait'
  ): string | undefined {
    const routeData = url.split('/');

    const backgroundImageHelper: {
      [destinationName: string]: () => string | undefined;
    } = {
      destinations: () =>
        this.getDestinationData(routeData[2] as DestinationNames).images.png,
      crew: () => this.getCrewData(routeData[2]).images.png,
      technology: () =>
        this.getTechnologyData(routeData[2]).images[orientation],
    };

    const imageUrlFunc = backgroundImageHelper[routeData[1]];

    return imageUrlFunc ? imageUrlFunc() : undefined;
  }

  private getDestinationData(name: DestinationNames): Destination {
    return contentData.destinations.find(
      (dest) => dest.name === _.upperFirst(name)
    )!;
  }

  private getCrewData(name: string): Crew {
    return contentData.crew.find((crew) => crew.name === _.upperFirst(name))!;
  }
  private getTechnologyData(name: string): Technology {
    return contentData.technology.find(
      (tech) => tech.name === _.upperFirst(name)
    )!;
  }
}
