
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image',
  phone: 'phone',
  isAdmin: 'isAdmin',
  isVerified: 'isVerified'
};

exports.Prisma.PreferencesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  UserNotifications: 'UserNotifications',
  ReservationNotifications: 'ReservationNotifications',
  LeadNotifications: 'LeadNotifications',
  ContactNotifications: 'ContactNotifications',
  PaymentNotifications: 'PaymentNotifications',
  ReviewNotifications: 'ReviewNotifications'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state',
  providerAccountId: 'providerAccountId'
};

exports.Prisma.ReservationScalarFieldEnum = {
  id: 'id',
  pickupDate: 'pickupDate',
  dropoffDate: 'dropoffDate',
  pickupLocation: 'pickupLocation',
  dropoffLocation: 'dropoffLocation',
  pickupHour: 'pickupHour',
  dropoffHour: 'dropoffHour',
  dailyRate: 'dailyRate',
  totalDays: 'totalDays',
  subtotal: 'subtotal',
  tax: 'tax',
  totalAmount: 'totalAmount',
  amountPaid: 'amountPaid',
  status: 'status',
  paymentStatus: 'paymentStatus',
  notes: 'notes',
  specialRequests: 'specialRequests',
  vehicleId: 'vehicleId',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DraftReservationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  phone: 'phone',
  vehicleId: 'vehicleId',
  message: 'message',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  dropoffDate: 'dropoffDate',
  dropoffHour: 'dropoffHour',
  dropoffLocation: 'dropoffLocation',
  pickupDate: 'pickupDate',
  pickupHour: 'pickupHour',
  pickupLocation: 'pickupLocation'
};

exports.Prisma.StatusChangeScalarFieldEnum = {
  id: 'id',
  reservationId: 'reservationId',
  fromStatus: 'fromStatus',
  toStatus: 'toStatus',
  reason: 'reason',
  changedBy: 'changedBy',
  changeAt: 'changeAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  expires: 'expires',
  sessionToken: 'sessionToken'
};

exports.Prisma.VerificationTokenScalarFieldEnum = {
  identifier: 'identifier',
  token: 'token',
  expires: 'expires'
};

exports.Prisma.VehicleScalarFieldEnum = {
  id: 'id',
  make: 'make',
  model: 'model',
  category: 'category',
  year: 'year',
  color: 'color',
  transmission: 'transmission',
  fuel_type: 'fuel_type',
  licensePlate: 'licensePlate',
  status: 'status',
  features: 'features',
  dailyRate: 'dailyRate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MaintenanceBlockScalarFieldEnum = {
  id: 'id',
  vehicleId: 'vehicleId',
  reason: 'reason',
  startDate: 'startDate',
  endDate: 'endDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  stripeSession: 'stripeSession',
  amount: 'amount',
  status: 'status',
  intent_id: 'intent_id',
  reservationId: 'reservationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.DocumentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  url: 'url',
  uploadedAt: 'uploadedAt',
  userId: 'userId',
  reservationId: 'reservationId'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  url: 'url',
  uploadedAt: 'uploadedAt',
  position: 'position',
  vehicleId: 'vehicleId'
};

exports.Prisma.PushSubscriptionScalarFieldEnum = {
  id: 'id',
  endpoint: 'endpoint',
  keys: 'keys',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.OnboardingScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  tour: 'tour',
  completed: 'completed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.ReservationStatus = exports.$Enums.ReservationStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  PARTIAL: 'PARTIAL',
  REFUNDED: 'REFUNDED'
};

exports.VehicleCategory = exports.$Enums.VehicleCategory = {
  SEDAN: 'SEDAN',
  SUV: 'SUV',
  COUPE: 'COUPE',
  CONVERTIBLE: 'CONVERTIBLE',
  WAGON: 'WAGON',
  HATCHBACK: 'HATCHBACK'
};

exports.VehicleTransmission = exports.$Enums.VehicleTransmission = {
  AUTOMATIC: 'AUTOMATIC',
  MANUAL: 'MANUAL'
};

exports.VehicleFuelType = exports.$Enums.VehicleFuelType = {
  GASOLINE: 'GASOLINE',
  DIESEL: 'DIESEL',
  HYBRID: 'HYBRID',
  ELECTRIC: 'ELECTRIC'
};

exports.VehicleStatus = exports.$Enums.VehicleStatus = {
  AVAILABLE: 'AVAILABLE',
  UNAVAILABLE: 'UNAVAILABLE',
  PENDING: 'PENDING',
  RENTED: 'RENTED',
  MAINTENANCE: 'MAINTENANCE'
};

exports.Prisma.ModelName = {
  User: 'User',
  Preferences: 'Preferences',
  Account: 'Account',
  Reservation: 'Reservation',
  DraftReservation: 'DraftReservation',
  StatusChange: 'StatusChange',
  Session: 'Session',
  VerificationToken: 'VerificationToken',
  Vehicle: 'Vehicle',
  MaintenanceBlock: 'MaintenanceBlock',
  Payment: 'Payment',
  Document: 'Document',
  Image: 'Image',
  PushSubscription: 'PushSubscription',
  Onboarding: 'Onboarding'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
