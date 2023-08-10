import DeviceInfo from 'react-native-device-info';

type Tracking = {
  event: string;
  receiver_properties: {
    [key: string]: any;
  };
  properties?: {
    [key: string]: any;
  };
  time?: number;
  token?: string;
};

export class MailStream {
  private _appToken: string;
  private _trackId: string;
  private readonly _apiUrl: string = 'https://api.mailstream.megaads.vn';
  constructor(appToken: string) {
    this._appToken = appToken;
    try {
      this._trackId = DeviceInfo.getUniqueIdSync();
    } catch (error) {
      this._trackId = this._generateTrackId(20);
    }
  }

  public sendRequest(dataRows: Tracking) {
    if (!this._appToken) throw new Error('MailStream token missing...');
    dataRows.token = this._appToken;
    dataRows.receiver_properties.track_id = this._trackId;
    dataRows.time = new Date().getTime();
    fetch(this._apiUrl + '/tracking-api/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRows),
    })
      .then((response) => response.json())
      .catch();
  }

  private _generateTrackId(length: number): string {
    let result: string = '';
    let characters: string =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength: number = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
