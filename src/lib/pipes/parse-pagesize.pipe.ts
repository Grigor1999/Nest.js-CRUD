import * as Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';

import { JoiPipe } from './joi.pipe';

@Injectable()
export class ParsePageSizePipe extends JoiPipe {
  constructor() {
    super(Joi.number().integer().positive().optional(), {});
  }
}
