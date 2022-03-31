// std
import { URL } from 'url';

// 3p
import axios from 'axios';

// FoalTS
import { AbstractProvider, SocialTokens } from './abstract-provider.service';
import { UserInfoError } from './user-info.error';

export interface LinkedInUserInfoParams {
  projection?: string;
  fields?: string[];
}

/**
 * LinkedIn social provider.
 *
 * @export
 * @class LinkedInProvider
 * @extends {AbstractProvider<never, LinkedInUserInfoParams>}
 */
export class LinkedInProvider extends AbstractProvider<never, LinkedInUserInfoParams> {
  protected configPaths = {
    clientId: 'settings.social.linkedin.clientId',
    clientSecret: 'settings.social.linkedin.clientSecret',
    redirectUri: 'settings.social.linkedin.redirectUri',
  };

  protected authEndpoint = 'https://www.linkedin.com/oauth/v2/authorization';
  protected tokenEndpoint = 'https://www.linkedin.com/oauth/v2/accessToken';
  protected userInfoEndpoint = 'https://api.linkedin.com/v2/me';

  protected defaultScopes: string[] = [ 'r_liteprofile' ];

  async getUserInfoFromTokens(tokens: SocialTokens, params: LinkedInUserInfoParams = {}) {
    const url = new URL(this.userInfoEndpoint);

    if (params.projection) {
      url.searchParams.set('projection', params.projection);
    }
    if (params.fields) {
      url.searchParams.set('fields', params.fields.join(','));
    }

    try {
      const response = await axios.get(url.href, {
        headers: { Authorization: `Bearer ${tokens.access_token}` }
      });
      return response.data;
    } catch (error: any) {
      throw new UserInfoError(error.response.data);
    }
  }

}
