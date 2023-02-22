import { Injectable } from '@nestjs/common';

@Injectable()
export class AmoService {
  private accessToken: string;
  private domain: string;
  private clientId = '30878566';
  private url: string;
  async init(): Promise<void> {
    const res = await fetch('https://test.gnzs.ru/oauth/get-token.php', {
      headers: {
        'X-Client-Id': this.clientId,
      },
    });
    const data = await res.json();
    this.accessToken = data.access_token;
    this.domain = data.base_domain;
    this.url = `https://${this.domain}/api/v4`;
  }

  async createEntity(type: string, name: string | undefined): Promise<object> {
    try {
      const res = await fetch(`${this.url}/${this.getApiPath(type)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.accessToken}`,
        },
        body: JSON.stringify([{ name: name ? name : type }]),
      });
      const data = await res.json();
      return {
        type,
        name,
        id: data._embedded[this.getApiPath(type)][0].id,
        url: `https://${this.domain}/${this.getApiPath(type)}/detail/${
          data._embedded[this.getApiPath(type)][0].id
        }`,
      };
    } catch (error) {
      console.log(error);
      return Error('Error creating entity');
    }
  }
  getApiPath(type: string): string {
    switch (type) {
      case 'contact':
        return 'contacts';
        break;
      case 'company':
        return 'companies';
        break;
      case 'lead':
        return 'leads';
        break;
      default:
        throw new Error('Unsupported entity type');
        break;
    }
  }
}
