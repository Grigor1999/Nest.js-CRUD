import * as Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';

import { JoiPipe } from './joi.pipe';

@Injectable()
export class ParsePagePipe extends JoiPipe {
  constructor() {
    super(Joi.number().integer().positive().optional(), {});
  }
}
