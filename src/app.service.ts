import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getBtcRate() {
    const response = await axios.get(
      'https://api.coindesk.com/v1/bpi/currentprice/UAH.json',
    );
    return response.data;
  }
}
