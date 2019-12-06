import { Component, OnInit} from '@angular/core';
import { FetchDataService } from './services/fetch-data.service';
import * as d3 from 'd3v4';
import * as d3Cloud from 'd3-cloud'; 

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
    { divid: 'wordcloud1', title: 'Cancer Program', url: 'https://api.myjson.com/bins/80zl0', cloudData: null },
    { divid: 'wordcloud2', title: 'Tuberculosis Program', url: 'https://api.myjson.com/bins/12o1gk', cloudData: null }
  ];

  ngOnInit() {
    this.createWordCloudDynamically();
  }

  createWordCloudDynamically() {

    this.wordclouds.forEach((cloud,i) => {
    this.fetchDataS.getData(cloud.url).subscribe((response) => {
      this.wordclouds[i].cloudData = response['data'];
      console.log('cloud Data : ', this.wordclouds[i].cloudData);
      wordCloudModule(d3,d3Cloud).wordCloudGenerator({
        containerid: `#${cloud.divid}`,
        wordclouddata: this.wordclouds[i].cloudData,
        stopwords: 'this as of a was is new old how'});
    });
    });

}

}
