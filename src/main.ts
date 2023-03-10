/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerLicense } from '@syncfusion/ej2-base'
import { AppModule } from './app/app.module';

import { enableProdMode } from '@angular/core';

registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpGaV1FQmFJfFBmRGlZdlRxdEU3HVdTRHRcQlxhQX5Sd0BhWX1XcHQ=;Mgo+DSMBPh8sVXJ0S0J+XE9HflRAQmFOYVF2R2BJflRwfV9HYEwgOX1dQl9gSX9RfkViWHpccHdVQ2A=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJX3xLeUx0RWFab196dFxMYVxBNQtUQF1hSn5SdE1jWH5bcnRWQGRc;MTAxOTczNkAzMjMwMmUzNDJlMzBRZStEUXg4SUVJVG9FTmptazRyNWcwTUMrQUhXWTludE9RQUpSei9iVXhRPQ==;MTAxOTczN0AzMjMwMmUzNDJlMzBOS2crRm02TU91R0c4T0xUTWk0Njl6aDdJQjY5SEhRUnEvTmdHeVRSN2FZPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmFWfFRpR2NbfE5xflVPal1RVAciSV9jS31Td0drWX5fdXZVQmVdUA==;MTAxOTczOUAzMjMwMmUzNDJlMzBudCtJUFB4M1BFc0orakFSVzlTWXlrVGNPdEpmOXo1ZTBxd2JxQjUwYkxRPQ==;MTAxOTc0MEAzMjMwMmUzNDJlMzBOSG5pSGROVFVhN0QrMUM1NHZyOFM2RkhFWEo4SXV1N3BGd1JSKzZ3Tm9vPQ==;Mgo+DSMBMAY9C3t2VVhkQlFadVdJX3xLeUx0RWFab196dFxMYVxBNQtUQF1hSn5SdE1jWH5bcnRQRWdd;MTAxOTc0MkAzMjMwMmUzNDJlMzBhOWdHb3BaWENFV1FyWWdmRmFaUkZEb2FPa1ZMVlNvZkFndWFjWHVERlNNPQ==;MTAxOTc0M0AzMjMwMmUzNDJlMzBobmozWC9KU091OWlWWXl0V3FGamQ4TW9LVzVVdWZqdkdyMlRjczNXaGowPQ==;MTAxOTc0NEAzMjMwMmUzNDJlMzBudCtJUFB4M1BFc0orakFSVzlTWXlrVGNPdEpmOXo1ZTBxd2JxQjUwYkxRPQ==')
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

