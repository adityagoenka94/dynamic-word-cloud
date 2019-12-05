import { Component, OnInit} from '@angular/core';
import { FetchDataService } from './services/fetch-data.service';
import * as d3 from './../cloudModule/d3.v4.js';

declare var wordCloudModule: any;
// const d3 = './../cloudModule/d3.v4.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private fetchDataS: FetchDataService) { }

  wordclouds = [
    { divid: 'wordcloud1', title: 'Cancer Program', url: 'https://api.myjson.com/bins/80zl0' },
    { divid: 'wordcloud2', title: 'Tuberculosis Program', url: 'https://api.myjson.com/bins/12o1gk' }
  ];

  ngOnInit() {
    this.createWordCloudDynamically();
  }

  createWordCloudDynamically() {

    this.wordclouds.forEach((cloud) => {
    this.fetchDataS.getData(cloud.url).subscribe((response) => {
      const cloudData = response['data'];
      console.log('cloud Data : ', cloudData);
      wordCloudModule(d3).wordCloudGenerator({
        containerid: `#${cloud.divid}`,
        wordclouddata: cloudData,
        stopwords: 'this as of a was is new old how'});
    });
    });

}

}
