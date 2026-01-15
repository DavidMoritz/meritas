// src/components/Icon/Icons.map.tsx

import { lazy } from 'react';

import EnvelopeIcon from './Icons/envelope-icon';
import LockIcon from './Icons/lock-icon';
import UserIcon from './Icons/user-icon';

// Lazy load all icons
const AcornIcon = lazy(() => import('./Icons/acorn-icon'));
const AirplaneIcon = lazy(
  () => import('@/components/Icon/Icons/airplane-icon.tsx')
);
const AnchorIcon = lazy(
  () => import('@/components/Icon/Icons/anchor-icon.tsx')
);
const ArchiveIcon = lazy(
  () => import('@/components/Icon/Icons/archive-icon.tsx')
);
const ArrowClockwiseIcon = lazy(
  () => import('./Icons/arrow-clockwise-icon.tsx')
);
const ArrowDownIcon = lazy(() => import('./Icons/arrow-down-icon'));
const ArrowUpIcon = lazy(() => import('./Icons/arrow-up-icon'));
const ArrowsInLineVerticalIcon = lazy(
  () => import('@/components/Icon/Icons/arrows-in-line-vertical-icon.tsx')
);
const ArrowsInSimpleIcon = lazy(
  () => import('./Icons/arrows-in-simple-icon.tsx')
);
const ArrowsOutLineVerticalIcon = lazy(
  () => import('@/components/Icon/Icons/arrows-out-line-vertical-icon.tsx')
);
const ArrowsOutSimple = lazy(() => import('./Icons/arrows-out-simple.tsx'));
const ArticleIcon = lazy(
  () => import('@/components/Icon/Icons/article-icon.tsx')
);
const AtIcon = lazy(() => import('./Icons/at-icon.tsx'));
const BankIcon = lazy(() => import('@/components/Icon/Icons/bank-icon.tsx'));
const BarcodeIcon = lazy(
  () => import('@/components/Icon/Icons/barcode-icon.tsx')
);
const BarnIcon = lazy(() => import('@/components/Icon/Icons/barn-icon.tsx'));
const BellIcon = lazy(() => import('./Icons/bell-icon'));
const BellRingingIcon = lazy(
  () => import('@/components/Icon/Icons/bell-ringing-icon.tsx')
);
const BellSlashIcon = lazy(() => import('./Icons/bell-slash-icon.tsx'));
const BlueprintIcon = lazy(
  () => import('@/components/Icon/Icons/blueprint-icon.tsx')
);
const BookBookmarkIcon = lazy(
  () => import('@/components/Icon/Icons/book-bookmark-icon.tsx')
);
const BookIcon = lazy(() => import('@/components/Icon/Icons/book-icon.tsx'));
const BookOpenIcon = lazy(() => import('./Icons/book-open-icon'));
const BookmarkIcon = lazy(() => import('./Icons/bookmark-icon'));
const BookmarkSimpleIcon = lazy(
  () => import('@/components/Icon/Icons/bookmark-simple-icon.tsx')
);
const BooksIcon = lazy(() => import('@/components/Icon/Icons/books-icon.tsx'));
const BracketsAngleIcon = lazy(
  () => import('@/components/Icon/Icons/brackets-angle-icon.tsx')
);
const BracketsCurlyIcon = lazy(
  () => import('@/components/Icon/Icons/brackets-curly-icon.tsx')
);
const BracketsRoundIcon = lazy(
  () => import('@/components/Icon/Icons/brackets-round-icon.tsx')
);
const BracketsSquareIcon = lazy(
  () => import('@/components/Icon/Icons/brackets-square-icon.tsx')
);
const BrainIcon = lazy(() => import('@/components/Icon/Icons/brain-icon.tsx'));
const BuildingApartmentIcon = lazy(
  () => import('@/components/Icon/Icons/building-apartment-icon.tsx')
);
const BuildingIcon = lazy(() => import('./Icons/building-icon.tsx'));
const BuildingOfficeIcon = lazy(
  () => import('@/components/Icon/Icons/building-office-icon.tsx')
);
const BuildingsIcon = lazy(
  () => import('@/components/Icon/Icons/buildings-icon.tsx')
);
const BusIcon = lazy(() => import('@/components/Icon/Icons/bus-icon.tsx'));
const CalendarBlankIcon = lazy(
  () => import('@/components/Icon/Icons/calendar-blank-icon.tsx')
);
const CalendarIcon = lazy(() => import('./Icons/calendar-icon'));
const CameraIcon = lazy(() => import('./Icons/camera-icon'));
const CameraSlashIcon = lazy(
  () => import('@/components/Icon/Icons/camera-slash-icon.tsx')
);
const CarIcon = lazy(() => import('@/components/Icon/Icons/car-icon.tsx'));
const CardsIcon = lazy(() => import('@/components/Icon/Icons/cards-icon.tsx'));
const CardsThreeIcon = lazy(
  () => import('@/components/Icon/Icons/cards-three-icon.tsx')
);
const CaretCircleDownIcon = lazy(
  () => import('@/components/Icon/Icons/caret-circle-down-icon.tsx')
);
const CaretCircleLeftIcon = lazy(
  () => import('@/components/Icon/Icons/caret-circle-left-icon.tsx')
);
const CaretCircleRightIcon = lazy(
  () => import('@/components/Icon/Icons/caret-circle-right-icon.tsx')
);
const CaretCircleUpIcon = lazy(
  () => import('@/components/Icon/Icons/caret-circle-up-icon.tsx')
);
const CaretDoubleLeftIcon = lazy(
  () => import('./Icons/caret-double-left-icon.tsx')
);
const CaretDoubleRightIcon = lazy(
  () => import('./Icons/caret-double-right-icon.tsx')
);
const CaretDownIcon = lazy(() => import('./Icons/caret-down-icon.tsx'));
const CaretLeftIcon = lazy(() => import('./Icons/caret-left-icon.tsx'));
const CaretRightIcon = lazy(() => import('./Icons/caret-right-icon.tsx'));
const CaretUpDownIcon = lazy(
  () => import('@/components/Icon/Icons/caret-up-down-icon.tsx')
);
const CaretUpIcon = lazy(() => import('./Icons/caret-up-icon.tsx'));
const CertificateIcon = lazy(
  () => import('@/components/Icon/Icons/certificate-icon.tsx')
);
const ChartBarHorizontalIcon = lazy(
  () => import('@/components/Icon/Icons/chart-bar-horizontal-icon.tsx')
);
const ChartBarIcon = lazy(
  () => import('@/components/Icon/Icons/chart-bar-icon.tsx')
);
const ChartDonutIcon = lazy(
  () => import('@/components/Icon/Icons/chart-donut-icon.tsx')
);
const ChartLineDownIcon = lazy(
  () => import('@/components/Icon/Icons/chart-line-down-icon.tsx')
);
const ChartLineIcon = lazy(
  () => import('@/components/Icon/Icons/chart-line-icon.tsx')
);
const ChartLineUpIcon = lazy(
  () => import('@/components/Icon/Icons/chart-line-up-icon.tsx')
);
const ChartPieSliceIcon = lazy(
  () => import('./Icons/chart-pie-slice-icon.tsx')
);
const ChartScatterIcon = lazy(
  () => import('@/components/Icon/Icons/chart-scatter-icon.tsx')
);
const CheckCircleIcon = lazy(() => import('./Icons/check-circle-icon'));
const CheckIcon = lazy(() => import('./Icons/check-icon'));
const CircleIcon = lazy(() => import('./Icons/circle-icon'));
const CityIcon = lazy(() => import('@/components/Icon/Icons/city-icon.tsx'));
const ClipboardIcon = lazy(() => import('./Icons/clipboard-icon'));
const ClockIcon = lazy(() => import('@/components/Icon/Icons/clock-icon.tsx'));
const CodeIcon = lazy(() => import('@/components/Icon/Icons/code-icon.tsx'));
const ColumnsIcon = lazy(
  () => import('@/components/Icon/Icons/columns-icon.tsx')
);
const CompassIcon = lazy(() => import('./Icons/compass-icon'));
const CopyIcon = lazy(() => import('./Icons/copy-icon'));
const CornersInIcon = lazy(() => import('./Icons/corners-in-icon.tsx'));
const CornersOutIcon = lazy(() => import('./Icons/corners-out-icon.tsx'));
const CreditCardIcon = lazy(() => import('./Icons/credit-card-icon'));
const CubeIcon = lazy(() => import('./Icons/cube-icon.tsx'));
const CurrencyDollarIcon = lazy(
  () => import('./Icons/currency-dollar-icon.tsx')
);
const DiscordLogoIcon = lazy(
  () => import('@/components/Icon/Icons/discord-logo-icon.tsx')
);
const DotsThreeVerticalIcon = lazy(
  () => import('./Icons/dots-three-vertical-icon.tsx')
);
const DropIcon = lazy(() => import('./Icons/drop-icon.tsx'));
const DropSimpleIcon = lazy(
  () => import('@/components/Icon/Icons/drop-simple-icon.tsx')
);
const DropSlashIcon = lazy(
  () => import('@/components/Icon/Icons/drop-slash-icon.tsx')
);
// const EnvelopeIcon = lazy(() => import("./Icons/envelope-icon.tsx"));
const EyeClosedIcon = lazy(() => import('./Icons/eye-closed-icon.tsx'));
const EyeIcon = lazy(() => import('./Icons/eye-icon'));
const EyeSlashIcon = lazy(
  () => import('@/components/Icon/Icons/eye-slash-icon.tsx')
);
const FactoryIcon = lazy(
  () => import('@/components/Icon/Icons/factory-icon.tsx')
);
const FileIcon = lazy(() => import('./Icons/file-icon'));
const FileTextIcon = lazy(() => import('./Icons/file-text-icon'));
const FlagIcon = lazy(() => import('./Icons/flag-icon'));
const FunnelIcon = lazy(() => import('./Icons/funnel-icon.tsx'));
const GarageIcon = lazy(
  () => import('@/components/Icon/Icons/garage-icon.tsx')
);
const GearIcon = lazy(() => import('./Icons/gear-icon.tsx'));
const GlobeIcon = lazy(() => import('./Icons/globe-icon'));
const GridFourIcon = lazy(
  () => import('@/components/Icon/Icons/grid-four-icon.tsx')
);
const GridNineIcon = lazy(
  () => import('@/components/Icon/Icons/grid-nine-icon.tsx')
);
const HandPalmIcon = lazy(
  () => import('@/components/Icon/Icons/hand-palm-icon.tsx')
);
const HashIcon = lazy(() => import('./Icons/hash-icon'));
const HeadCircuitIcon = lazy(
  () => import('@/components/Icon/Icons/head-circuit-icon.tsx')
);
const HeartIcon = lazy(() => import('./Icons/heart-icon'));
const HospitalIcon = lazy(
  () => import('@/components/Icon/Icons/hospital-icon.tsx')
);
const HouseIcon = lazy(() => import('./Icons/house-icon.tsx'));
const ImageBrokenIcon = lazy(
  () => import('@/components/Icon/Icons/image-broken-icon.tsx')
);
const ImageIcon = lazy(() => import('./Icons/image-icon.tsx'));
const ImagesIcon = lazy(
  () => import('@/components/Icon/Icons/images-icon.tsx')
);
const InfoIcon = lazy(() => import('./Icons/info-icon'));
const LayoutIcon = lazy(() => import('./Icons/layout-icon'));
const LightningIcon = lazy(() => import('./Icons/lightning-icon.tsx'));
const LinkIcon = lazy(() => import('./Icons/link-icon'));
const ListBulletsIcon = lazy(() => import('./Icons/list-bullets-icon.tsx'));
const ListIcon = lazy(() => import('./Icons/list-icon.tsx'));
// const LockIcon = lazy(() => import("./Icons/lock-icon"));
const LockOpenIcon = lazy(() => import('./Icons/lock-open-icon.tsx'));
const MagnifyingGlassIcon = lazy(
  () => import('./Icons/magnifying-glass-icon.tsx')
);
const MagnifyingGlassMinusIcon = lazy(
  () => import('@/components/Icon/Icons/magnifying-glass-minus-icon.tsx')
);
const MagnifyingGlassPlusIcon = lazy(
  () => import('./Icons/magnifying-glass-plus-icon.tsx')
);
const MapPinIcon = lazy(() => import('./Icons/map-pin-icon'));
const MedalIcon = lazy(() => import('./Icons/medal-icon.tsx'));
const MinusIcon = lazy(() => import('./Icons/minus-icon'));
const NotePencilIcon = lazy(() => import('./Icons/note-pencil-icon.tsx'));
const PackageIcon = lazy(() => import('./Icons/package-icon'));
const PaperPlaneTiltIcon = lazy(
  () => import('./Icons/paper-plane-tilt-icon.tsx')
);
const PaperclipIcon = lazy(() => import('./Icons/paperclip-icon'));
const PauseIcon = lazy(() => import('./Icons/pause-icon'));
const PencilIcon = lazy(() => import('./Icons/pencil-icon.tsx'));
const PencilSimpleIcon = lazy(
  () => import('@/components/Icon/Icons/pencil-simple-icon.tsx')
);
const PercentIcon = lazy(() => import('./Icons/percent-icon'));
const PhoneIcon = lazy(() => import('./Icons/phone-icon'));
const PlusIcon = lazy(() => import('./Icons/plus-icon'));
const PrinterIcon = lazy(() => import('./Icons/printer-icon'));
const PulseIcon = lazy(() => import('./Icons/pulse-icon.tsx'));
const QrCodeIcon = lazy(
  () => import('@/components/Icon/Icons/qr-code-icon.tsx')
);
const QuestionIcon = lazy(
  () => import('@/components/Icon/Icons/question-icon.tsx')
);
const RobotIcon = lazy(() => import('@/components/Icon/Icons/robot-icon.tsx'));
const ScanIcon = lazy(() => import('@/components/Icon/Icons/scan-icon.tsx'));
const ShieldIcon = lazy(() => import('./Icons/shield-icon'));
const SignInIcon = lazy(() => import('./Icons/sign-in-icon.tsx'));
const SignOutIcon = lazy(() => import('./Icons/sign-out-icon.tsx'));
const SlidersHorizontalIcon = lazy(
  () => import('@/components/Icon/Icons/sliders-horizontal-icon.tsx')
);
const SlidersIcon = lazy(() => import('./Icons/sliders-icon'));
const SpinnerGapIcon = lazy(() => import('./Icons/spinner-gap-icon.tsx'));
const SpinnerIcon = lazy(() => import('./Icons/spinner-icon.tsx'));
const SquareSplitHorizontalIcon = lazy(
  () => import('@/components/Icon/Icons/square-split-horizontal-icon.tsx')
);
const SquaresFourIcon = lazy(() => import('./Icons/squares-four-icon.tsx'));
const StackIcon = lazy(() => import('./Icons/stack-icon.tsx'));
const StarIcon = lazy(() => import('./Icons/star-icon'));
const StorefrontIcon = lazy(
  () => import('@/components/Icon/Icons/storefront-icon.tsx')
);
const SunIcon = lazy(() => import('./Icons/sun-icon'));
const TagIcon = lazy(() => import('./Icons/tag-icon'));
const TargetIcon = lazy(() => import('./Icons/target-icon.tsx'));
const TrashIcon = lazy(() => import('./Icons/trash-icon.tsx'));
const TrendDownIcon = lazy(
  () => import('@/components/Icon/Icons/trend-down-icon.tsx')
);
const TrendUpIcon = lazy(() => import('./Icons/trend-up-icon.tsx'));
const TrophyIcon = lazy(() => import('./Icons/trophy-icon'));
const TruckIcon = lazy(() => import('@/components/Icon/Icons/truck-icon.tsx'));
const UploadIcon = lazy(() => import('./Icons/upload-icon'));
const UserCheckIcon = lazy(() => import('./Icons/user-check-icon'));
// const UserIcon = lazy(() => import("./Icons/user-icon"));
const UserMinusIcon = lazy(() => import('./Icons/user-minus-icon'));
const UserPlusIcon = lazy(() => import('./Icons/user-plus-icon'));
const UsersIcon = lazy(() => import('./Icons/users-icon'));
const WarehouseIcon = lazy(
  () => import('@/components/Icon/Icons/warehouse-icon.tsx')
);
const WarningCircleIcon = lazy(() => import('./Icons/warning-circle-icon.tsx'));
const WarningIcon = lazy(() => import('./Icons/warning-icon.tsx'));
const WrenchIcon = lazy(() => import('./Icons/wrench-icon.tsx'));
const XCircleIcon = lazy(() => import('./Icons/x-circle-icon'));
const XIcon = lazy(() => import('./Icons/x-icon.tsx'));

// Update keys MANUALLY whenever icons are added/removed (see explanation below)
export const IconMap = {
  acorn: <AcornIcon />,
  airplane: <AirplaneIcon />,
  anchor: <AnchorIcon />,
  archive: <ArchiveIcon />,
  'arrow-clockwise': <ArrowClockwiseIcon />,
  'arrow-down': <ArrowDownIcon />,
  'arrow-up': <ArrowUpIcon />,
  'arrows-in-line-vertical': <ArrowsInLineVerticalIcon />,
  'arrows-in-simple': <ArrowsInSimpleIcon />,
  'arrows-out-line-vertical': <ArrowsOutLineVerticalIcon />,
  'arrows-out-simple': <ArrowsOutSimple />,
  article: <ArticleIcon />,
  at: <AtIcon />,
  bank: <BankIcon />,
  barcode: <BarcodeIcon />,
  barn: <BarnIcon />,
  bell: <BellIcon />,
  'bell-ringing': <BellRingingIcon />,
  'bell-slash': <BellSlashIcon />,
  blueprint: <BlueprintIcon />,
  book: <BookIcon />,
  'book-open': <BookOpenIcon />,
  'book-bookmark': <BookBookmarkIcon />,
  bookmark: <BookmarkIcon />,
  'bookmark-simple': <BookmarkSimpleIcon />,
  books: <BooksIcon />,
  'brackets-angle': <BracketsAngleIcon />,
  'brackets-curly': <BracketsCurlyIcon />,
  'brackets-round': <BracketsRoundIcon />,
  'brackets-square': <BracketsSquareIcon />,
  brain: <BrainIcon />,
  building: <BuildingIcon />,
  'building-apartment': <BuildingApartmentIcon />,
  'building-office': <BuildingOfficeIcon />,
  buildings: <BuildingsIcon />,
  bus: <BusIcon />,
  calendar: <CalendarIcon />,
  'calendar-blank': <CalendarBlankIcon />,
  camera: <CameraIcon />,
  'camera-slash': <CameraSlashIcon />,
  car: <CarIcon />,
  cards: <CardsIcon />,
  'cards-three': <CardsThreeIcon />,
  'caret-circle-down': <CaretCircleDownIcon />,
  'caret-circle-left': <CaretCircleLeftIcon />,
  'caret-circle-right': <CaretCircleRightIcon />,
  'caret-circle-up': <CaretCircleUpIcon />,
  'caret-double-left': <CaretDoubleLeftIcon />,
  'caret-double-right': <CaretDoubleRightIcon />,
  'caret-down': <CaretDownIcon />,
  'caret-left': <CaretLeftIcon />,
  'caret-right': <CaretRightIcon />,
  'caret-up': <CaretUpIcon />,
  'caret-up-down': <CaretUpDownIcon />,
  certificate: <CertificateIcon />,
  'chart-bar': <ChartBarIcon />,
  'chart-bar-horizontal': <ChartBarHorizontalIcon />,
  'chart-donut': <ChartDonutIcon />,
  'chart-line-down': <ChartLineDownIcon />,
  'chart-line': <ChartLineIcon />,
  'chart-line-up': <ChartLineUpIcon />,
  'chart-pie-slice': <ChartPieSliceIcon />,
  'chart-scatter': <ChartScatterIcon />,
  check: <CheckIcon />,
  'check-circle': <CheckCircleIcon />,
  circle: <CircleIcon />,
  city: <CityIcon />,
  clipboard: <ClipboardIcon />,
  clock: <ClockIcon />,
  code: <CodeIcon />,
  columns: <ColumnsIcon />,
  compass: <CompassIcon />,
  copy: <CopyIcon />,
  'corners-in': <CornersInIcon />,
  'corners-out': <CornersOutIcon />,
  'credit-card': <CreditCardIcon />,
  cube: <CubeIcon />,
  'currency-dollar': <CurrencyDollarIcon />,
  'discord-logo': <DiscordLogoIcon />,
  'dots-three-vertical': <DotsThreeVerticalIcon />,
  drop: <DropIcon />,
  'drop-simple': <DropSimpleIcon />,
  'drop-slash': <DropSlashIcon />,
  envelope: <EnvelopeIcon />,
  eye: <EyeIcon />,
  'eye-closed': <EyeClosedIcon />,
  'eye-slash': <EyeSlashIcon />,
  factory: <FactoryIcon />,
  file: <FileIcon />,
  'file-text': <FileTextIcon />,
  flag: <FlagIcon />,
  funnel: <FunnelIcon />,
  garage: <GarageIcon />,
  gear: <GearIcon />,
  globe: <GlobeIcon />,
  'grid-four': <GridFourIcon />,
  'grid-nine': <GridNineIcon />,
  'hand-palm': <HandPalmIcon />,
  hash: <HashIcon />,
  'head-circuit': <HeadCircuitIcon />,
  heart: <HeartIcon />,
  hospital: <HospitalIcon />,
  house: <HouseIcon />,
  image: <ImageIcon />,
  'image-broken': <ImageBrokenIcon />,
  images: <ImagesIcon />,
  info: <InfoIcon />,
  layout: <LayoutIcon />,
  lightning: <LightningIcon />,
  link: <LinkIcon />,
  list: <ListIcon />,
  'list-bullets': <ListBulletsIcon />,
  lock: <LockIcon />,
  'lock-open': <LockOpenIcon />,
  'magnifying-glass': <MagnifyingGlassIcon />,
  'magnifying-glass-minus': <MagnifyingGlassMinusIcon />,
  'magnifying-glass-plus': <MagnifyingGlassPlusIcon />,
  'map-pin': <MapPinIcon />,
  medal: <MedalIcon />,
  minus: <MinusIcon />,
  'note-pencil': <NotePencilIcon />,
  package: <PackageIcon />,
  'paper-plane-tilt': <PaperPlaneTiltIcon />,
  paperclip: <PaperclipIcon />,
  pause: <PauseIcon />,
  pencil: <PencilIcon />,
  'pencil-simple': <PencilSimpleIcon />,
  percent: <PercentIcon />,
  phone: <PhoneIcon />,
  plus: <PlusIcon />,
  printer: <PrinterIcon />,
  pulse: <PulseIcon />,
  'qr-code': <QrCodeIcon />,
  question: <QuestionIcon />,
  robot: <RobotIcon />,
  scan: <ScanIcon />,
  shield: <ShieldIcon />,
  'sign-in': <SignInIcon />,
  'sign-out': <SignOutIcon />,
  sliders: <SlidersIcon />,
  'sliders-horizontal': <SlidersHorizontalIcon />,
  spinner: <SpinnerIcon />,
  'spinner-gap': <SpinnerGapIcon />,
  'square-split-horizontal': <SquareSplitHorizontalIcon />,
  'squares-four': <SquaresFourIcon />,
  stack: <StackIcon />,
  star: <StarIcon />,
  storefront: <StorefrontIcon />,
  sun: <SunIcon />,
  tag: <TagIcon />,
  target: <TargetIcon />,
  trash: <TrashIcon />,
  'trend-down': <TrendDownIcon />,
  'trend-up': <TrendUpIcon />,
  trophy: <TrophyIcon />,
  truck: <TruckIcon />,
  upload: <UploadIcon />,
  user: <UserIcon />,
  'user-check': <UserCheckIcon />,
  'user-minus': <UserMinusIcon />,
  'user-plus': <UserPlusIcon />,
  users: <UsersIcon />,
  warehouse: <WarehouseIcon />,
  warning: <WarningIcon />,
  'warning-circle': <WarningCircleIcon />,
  wrench: <WrenchIcon />,
  x: <XIcon />,
  'x-circle': <XCircleIcon />,
} as const;

// MANUALLY update this list whenever icons are added/removed.  This CANNOT be
// made dynamic (e.g. `Object.keys(IconMap)`) without breaking zod typechecking
export const IconMapKeys = [
  'acorn',
  'airplane',
  'anchor',
  'archive',
  'arrow-clockwise',
  'arrow-down',
  'arrow-up',
  'arrows-in-line-vertical',
  'arrows-in-simple',
  'arrows-out-line-vertical',
  'arrows-out-simple',
  'article',
  'at',
  'bank',
  'barcode',
  'barn',
  'bell',
  'bell-ringing',
  'bell-slash',
  'blueprint',
  'book',
  'book-open',
  'book-bookmark',
  'bookmark',
  'bookmark-simple',
  'books',
  'brackets-angle',
  'brackets-curly',
  'brackets-round',
  'brackets-square',
  'brain',
  'building',
  'building-apartment',
  'building-office',
  'buildings',
  'bus',
  'calendar',
  'calendar-blank',
  'camera',
  'camera-slash',
  'car',
  'cards',
  'cards-three',
  'caret-circle-down',
  'caret-circle-left',
  'caret-circle-right',
  'caret-circle-up',
  'caret-double-left',
  'caret-double-right',
  'caret-down',
  'caret-left',
  'caret-right',
  'caret-up',
  'caret-up-down',
  'certificate',
  'chart-bar',
  'chart-bar-horizontal',
  'chart-donut',
  'chart-line-down',
  'chart-line',
  'chart-line-up',
  'chart-pie-slice',
  'chart-scatter',
  'check',
  'check-circle',
  'circle',
  'city',
  'clipboard',
  'clock',
  'code',
  'columns',
  'compass',
  'copy',
  'corners-in',
  'corners-out',
  'credit-card',
  'cube',
  'currency-dollar',
  'discord-logo',
  'dots-three-vertical',
  'drop',
  'drop-simple',
  'drop-slash',
  'envelope',
  'eye',
  'eye-closed',
  'eye-slash',
  'factory',
  'file',
  'file-text',
  'flag',
  'funnel',
  'garage',
  'gear',
  'globe',
  'grid-four',
  'grid-nine',
  'hand-palm',
  'hash',
  'head-circuit',
  'heart',
  'hospital',
  'house',
  'image',
  'image-broken',
  'images',
  'info',
  'layout',
  'lightning',
  'link',
  'list',
  'list-bullets',
  'lock',
  'lock-open',
  'magnifying-glass',
  'magnifying-glass-minus',
  'magnifying-glass-plus',
  'map-pin',
  'medal',
  'minus',
  'note-pencil',
  'package',
  'paper-plane-tilt',
  'paperclip',
  'pause',
  'pencil',
  'pencil-simple',
  'percent',
  'phone',
  'plus',
  'printer',
  'pulse',
  'qr-code',
  'question',
  'robot',
  'scan',
  'shield',
  'sign-in',
  'sign-out',
  'sliders',
  'sliders-horizontal',
  'spinner',
  'spinner-gap',
  'square-split-horizontal',
  'squares-four',
  'stack',
  'star',
  'storefront',
  'sun',
  'tag',
  'target',
  'trash',
  'trend-down',
  'trend-up',
  'trophy',
  'truck',
  'upload',
  'user',
  'user-check',
  'user-minus',
  'user-plus',
  'users',
  'warehouse',
  'warning',
  'warning-circle',
  'wrench',
  'x',
  'x-circle',
] as const;
