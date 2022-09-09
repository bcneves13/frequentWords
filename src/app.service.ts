import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  mostFrequentWord(paragraph: string, forbiddenWords: Array<string>): string {
    let words = paragraph.split(/[^a-zA-Z0-9]+/);
    let count:Object = {};
    let mostAppear: number = -1;
    let retWord: string = '';

    words.map((word: string) => {
      if(forbiddenWords.indexOf(word) < 0 && word != '') {
        const lowerCase = word.toLowerCase();
        if(!count.hasOwnProperty(lowerCase)) {
          count[lowerCase] = 0;
        } else {
          count[lowerCase] += 1;
        }
        if(count[lowerCase] > mostAppear){
          mostAppear = count[lowerCase];
          retWord = lowerCase;
        }
      }
    })
    return retWord;
  }
}
