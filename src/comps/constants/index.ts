import images from '@public/img/flag';
import bankimgs from '@public/img/bank';

export const data = [
    {
        title: 'Pages',
        links: [
            { label: 'Flights', link: '#' },
            { label: 'Hotels', link: '#' },
            { label: 'My Booking', link: '#' },
            { label: 'Career', link: '#' },
            { label: 'About Us', link: '#' },
            { label: 'Partner With Us', link: '#' },
        ],
    },
    {
        title: 'Support',
        links: [
            { label: 'Customer Care', link: '#' },
            { label: 'FAQs', link: '#' },
            { label: 'Booking', link: '#' },
            { label: 'Payment', link: '#' },
        ],
    },
    // {
    //     title: 'Community',
    //     links: [
    //         { label: 'Join Discord', link: '#' },
    //         { label: 'Follow on Twitter', link: '#' },
    //         { label: 'Email newsletter', link: '#' },
    //         { label: 'GitHub discussions', link: '#' },
    //     ],
    // },
];
export const navlinks = [
    {
        link: '/flights',
        label: 'Flights',
    },
    {
        link: '/hotels',
        label: 'Hotels',
    },
    {
        link: '/my-booking',
        label: 'My Booking',
    },
    {
        link: '/support',
        label: 'Customer Care',
    },
];
export const langs = [
    { label: 'Global', image: images.gl, url: '#' },
    { label: 'Indonesia', image: images.id, url: '#' },
    { label: 'Malaysia', image: images.my, url: '#' },
    { label: 'Singapore', image: images.sg, url: '#' },
    { label: 'Philippines', image: images.ph, url: '#' },
    { label: 'Vietnam', image: images.vn, url: '#' },
    { label: 'Thailand', image: images.th, url: '#' },
];
export const banks = [
    { name: 'ATM BERSAMA', img: 'atm-bersama.svg', bgcolor: '#3171B8' },
    { name: 'PRIMA', img: 'prima-nobg.svg', bgcolor: '#274F8C' },
    { name: 'BCA', img: 'bca.svg', bgcolor: '#123293' },
    { name: 'MANDIRI', img: 'mandiri.svg', bgcolor: '#163C75' },
    { name: 'BNI', img: 'bni.svg', bgcolor: '#327494' },
    { name: 'BRI', img: 'bri.svg', bgcolor: '#284291' },
    { name: 'MAYBANK', img: 'maybank.svg', bgcolor: '#F1BE46' },
    { name: 'CIMB', img: 'cimb.svg', bgcolor: '#DB4433' },
    { name: 'MASTER', img: 'master-card.svg', bgcolor: '#FFF' },
    { name: 'VISA', img: 'visa.svg', bgcolor: '#FFF' },
    { name: 'JBC', img: 'jcb.svg', bgcolor: '#FFF' },
    { name: 'AMEX', img: 'amex.svg', bgcolor: '#FFF' },
    // { name: 'ATM BERSAMA', img: bankimgs.atmBersama, bgcolor: '#3171B8' },
    // { name: 'PRIMA', img: bankimgs.prima, bgcolor: '#274F8C' },
    // { name: 'BCA', img: bankimgs.bca, bgcolor: '#123293' },
    // { name: 'MANDIRI', img: bankimgs.mandiri, bgcolor: '#163C75' },
    // { name: 'BNI', img: bankimgs.bni, bgcolor: '#327494' },
    // { name: 'BRI', img: bankimgs.bri, bgcolor: '#284291' },
    // { name: 'MAYBANK', img: bankimgs.maybank, bgcolor: '#F1BE46' },
    // { name: 'CIMB', img: bankimgs.cimb, bgcolor: '#DB4433' },
    // { name: 'MASTER', img: bankimgs.masterCard, bgcolor: '#FFF' },
    // { name: 'VISA', img: bankimgs.visa, bgcolor: '#FFF' },
    // { name: 'JBC', img: bankimgs.jbc, bgcolor: '#FFF' },
    // { name: 'AMEX', img: bankimgs.amex, bgcolor: '#FFF' },
];
export const currencydata = [
    {
        symbol: 'AED',
        title: 'AED',
        description: 'United Arab Emirates dirham',
    },
    {
        symbol: 'HKD',
        title: 'HKD',
        description: 'Hong Kong dollar',
    },
    {
        symbol: 'PKR',
        title: 'PKR',
        description: 'Pakistani rupee',
    },
    {
        symbol: 'AUD',
        title: 'AUD',
        description: 'Australian dollar',
    },
    {
        symbol: 'IDR',
        title: 'IDR',
        description: 'Indonesian rupiah',
    },
    {
        symbol: 'RUB',
        title: 'RUB',
        description: 'Russian rouble',
    },
    {
        symbol: 'BDT',
        title: 'BDT',
        description: 'Bangladeshi taka',
    },
    {
        symbol: 'INR',
        title: 'INR',
        description: 'Indian rupee',
    },
    {
        symbol: 'SAR',
        title: 'SAR',
        description: 'Saudi riyal',
    },
    {
        symbol: 'CAD',
        title: 'CAD',
        description: 'Canadian dollar',
    },
    {
        symbol: 'JPY',
        title: 'JPY',
        description: 'Japanese yen',
    },
    {
        symbol: 'SGD',
        title: 'SGD',
        description: 'Singapore dollar',
    },
    {
        symbol: 'CHF',
        title: 'CHF',
        description: 'Swiss franc',
    },
    {
        symbol: 'KRW',
        title: 'KRW',
        description: 'South Korean won',
    },
    {
        symbol: 'THB',
        title: 'THB',
        description: 'Thai baht',
    },
    {
        symbol: 'CNY',
        title: 'CNY',
        description: 'Chinese yuan',
    },
    {
        symbol: 'MYR',
        title: 'MYR',
        description: 'Malaysian ringgit',
    },
    {
        symbol: 'TWD',
        title: 'TWD',
        description: 'New Taiwan dollar',
    },
    {
        symbol: 'EUR',
        title: 'EUR',
        description: 'Euro',
    },
    {
        symbol: 'NZD',
        title: 'NZD',
        description: 'New Zealand dollar',
    },
    {
        symbol: 'USD',
        title: 'USD',
        description: 'United States dollar',
    },
    {
        symbol: 'GBP',
        title: 'GBP',
        description: 'Pound sterling',
    },
    {
        symbol: 'PHP',
        title: 'PHP',
        description: 'Philippine peso',
    },
    {
        symbol: 'VND',
        title: 'VND',
        description: 'Vietnamese dong',
    },
];

export const airlinesdata = [
    { name: 'Air Asia', iata: 'QZ' },
    { name: 'Lion Air', iata: 'JT' },
    { name: 'Garuda Indonesia', iata: 'GA' },
    { name: 'Sriwijaya Air', iata: 'SJ' },
    { name: 'Batik Air', iata: 'ID' },
    { name: 'Citilink Airlines', iata: 'QG' },
    { name: 'Saudia', iata: 'SV' },
    { name: 'Trigana Air', iata: 'IL' },
    { name: 'Scoot', iata: 'TZ' },
    { name: 'Jetstar', iata: 'JQ' },
    { name: 'Singapore Airlines', iata: 'SQ' },
    { name: 'Malaysia Airlines', iata: 'MH' },
    { name: 'Cathay Pacific', iata: 'CX' },
    { name: 'Qatar Airways', iata: 'QR' },
    { name: 'Etihad Airways', iata: 'EY' },
    { name: 'China Airlines', iata: 'CI' },
    { name: 'KLM', iata: 'KL' },
    { name: 'Thai Airways', iata: 'TG' },
    { name: 'Philippine Airlines', iata: 'PR' },
    { name: 'Vietnam Airlines', iata: 'VN' },
    { name: 'Japan Airlines', iata: 'JL' },
    { name: 'Turkish Airlines', iata: 'TK' },
    { name: 'Qantas', iata: 'QF' },
    { name: 'Korean Air', iata: 'KE' },
    { name: 'Lufthansa', iata: 'LH' },
    { name: 'Asiana Airlines', iata: 'OZ' },
];

export const choosedata = [
    {
        title: 'Competitive Pricing',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
        icon: 'price-tag.svg',
    },
    {
        title: 'Best Services',
        description:
            'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
        icon: 'service.svg',
    },
    {
        title: 'Worldwide Coverage',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: 'world-cover.svg',
    },
];

export const domesticdata = [
    {
        url: '/',
        img: '/img/banner/thumb/4f42872de276f5d9777e0cd37f050cdb.png',
        arr: 'Jakarta',
        dep: 'Surabaya',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/0afcf1d8d106f57d251b64dc1f8a113c.png',
        arr: 'Malang',
        dep: 'Jakarta',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/09a2c270c0c3146b04c745156df1f7ac.png',
        arr: 'Tana Toraja',
        dep: 'Jakarta',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/619df2d05980010cd0ae288b065b42e7.png',
        arr: 'Makassar',
        dep: 'Jakarta',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/6887208133afbb745279354c864d222d.png',
        arr: 'Pontianak',
        dep: 'Jakarta',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/d2b77709e3baf72363fd7ace02dba939.png',
        arr: 'Medan',
        dep: 'Jakarta',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/dcbae8249f01f195bc68e130fe5ce3de.png',
        arr: 'Surabaya',
        dep: 'Jakarta',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/f923b267bd766cfd2b08b0ed2a971b06.png',
        arr: 'Yogyakarta',
        dep: 'Jakarta',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/f945aa577be6725767d163b392b461c4.png',
        arr: 'Jayapura',
        dep: 'Jakarta',
        price: '415,000',
    },
];

export const internationaldata = [
    {
        url: '/',
        img: '/img/banner/thumb/4f42872de276f5d9777e0cd37f050cdb.png',
        arr: 'Chiang Mai',
        dep: 'Bangkok',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/0afcf1d8d106f57d251b64dc1f8a113c.png',
        arr: 'Fukuoka',
        dep: 'Bangkok',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/09a2c270c0c3146b04c745156df1f7ac.png',
        arr: 'Jayapura',
        dep: 'Sydney',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/619df2d05980010cd0ae288b065b42e7.png',
        arr: 'Denpasar',
        dep: 'Atlanta',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/6887208133afbb745279354c864d222d.png',
        arr: 'Jayapura',
        dep: 'Sydney',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/d2b77709e3baf72363fd7ace02dba939.png',
        arr: 'Dammam',
        dep: 'Dubai',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/dcbae8249f01f195bc68e130fe5ce3de.png',
        arr: 'Hong Kong',
        dep: 'Helsinki',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/f923b267bd766cfd2b08b0ed2a971b06.png',
        arr: 'Manila',
        dep: 'Doha',
        price: '415,000',
    },
    {
        url: '/',
        img: '/img/banner/thumb/f945aa577be6725767d163b392b461c4.png',
        arr: 'Denpasar',
        dep: 'Guangzhou',
        price: '415,000',
    },
];

export const worldcountries = [
    {
        code: 'BD',
        countryname: 'Bangladesh',
    },
    {
        code: 'BE',
        countryname: 'Belgium',
    },
    {
        code: 'BF',
        countryname: 'Burkina Faso',
    },
    {
        code: 'BG',
        countryname: 'Bulgaria',
    },
    {
        code: 'BA',
        countryname: 'Bosnia and Herz.',
    },
    {
        code: 'BN',
        countryname: 'Brunei',
    },
    {
        code: 'BO',
        countryname: 'Bolivia',
    },
    {
        code: 'JP',
        countryname: 'Japan',
    },
    {
        code: 'BI',
        countryname: 'Burundi',
    },
    {
        code: 'BJ',
        countryname: 'Benin',
    },
    {
        code: 'BT',
        countryname: 'Bhutan',
    },
    {
        code: 'JM',
        countryname: 'Jamaica',
    },
    {
        code: 'BW',
        countryname: 'Botswana',
    },
    {
        code: 'BR',
        countryname: 'Brazil',
    },
    {
        code: 'BS',
        countryname: 'Bahamas',
    },
    {
        code: 'BY',
        countryname: 'Belarus',
    },
    {
        code: 'BZ',
        countryname: 'Belize',
    },
    {
        code: 'RU',
        countryname: 'Russia',
    },
    {
        code: 'RW',
        countryname: 'Rwanda',
    },
    {
        code: 'RS',
        countryname: 'Serbia',
    },
    {
        code: 'TL',
        countryname: 'Timor-Leste',
    },
    {
        code: 'TM',
        countryname: 'Turkmenistan',
    },
    {
        code: 'TJ',
        countryname: 'Tajikistan',
    },
    {
        code: 'RO',
        countryname: 'Romania',
    },
    {
        code: 'GW',
        countryname: 'Guinea-Bissau',
    },
    {
        code: 'GT',
        countryname: 'Guatemala',
    },
    {
        code: 'GR',
        countryname: 'Greece',
    },
    {
        code: 'GQ',
        countryname: 'Eq. Guinea',
    },
    {
        code: 'GY',
        countryname: 'Guyana',
    },
    {
        code: 'GE',
        countryname: 'Georgia',
    },
    {
        code: 'GB',
        countryname: 'United Kingdom',
    },
    {
        code: 'GA',
        countryname: 'Gabon',
    },
    {
        code: 'GN',
        countryname: 'Guinea',
    },
    {
        code: 'GM',
        countryname: 'Gambia',
    },
    {
        code: 'GL',
        countryname: 'Greenland',
    },
    {
        code: 'GH',
        countryname: 'Ghana',
    },
    {
        code: 'OM',
        countryname: 'Oman',
    },
    {
        code: 'TN',
        countryname: 'Tunisia',
    },
    {
        code: 'JO',
        countryname: 'Jordan',
    },
    {
        code: 'HR',
        countryname: 'Croatia',
    },
    {
        code: 'HT',
        countryname: 'Haiti',
    },
    {
        code: 'HU',
        countryname: 'Hungary',
    },
    {
        code: 'HN',
        countryname: 'Honduras',
    },
    {
        code: 'PR',
        countryname: 'Puerto Rico',
    },
    {
        code: 'PS',
        countryname: 'Palestine',
    },
    {
        code: 'PT',
        countryname: 'Portugal',
    },
    {
        code: 'PY',
        countryname: 'Paraguay',
    },
    {
        code: 'PA',
        countryname: 'Panama',
    },
    {
        code: 'PG',
        countryname: 'Papua New Guinea',
    },
    {
        code: 'PE',
        countryname: 'Peru',
    },
    {
        code: 'PK',
        countryname: 'Pakistan',
    },
    {
        code: 'PH',
        countryname: 'Philippines',
    },
    {
        code: 'PL',
        countryname: 'Poland',
    },
    {
        code: 'ZM',
        countryname: 'Zambia',
    },
    {
        code: 'EH',
        countryname: 'W. Sahara',
    },
    {
        code: 'EE',
        countryname: 'Estonia',
    },
    {
        code: 'EG',
        countryname: 'Egypt',
    },
    {
        code: 'ZA',
        countryname: 'South Africa',
    },
    {
        code: 'EC',
        countryname: 'Ecuador',
    },
    {
        code: 'IT',
        countryname: 'Italy',
    },
    {
        code: 'VN',
        countryname: 'Vietnam',
    },
    {
        code: 'SB',
        countryname: 'Solomon Island.',
    },
    {
        code: 'ET',
        countryname: 'Ethiopia',
    },
    {
        code: 'SO',
        countryname: 'Somalia',
    },
    {
        code: 'ZW',
        countryname: 'Zimbabwe',
    },
    {
        code: 'ES',
        countryname: 'Spain',
    },
    {
        code: 'ER',
        countryname: 'Eritrea',
    },
    {
        code: 'ME',
        countryname: 'Montenegro',
    },
    {
        code: 'MD',
        countryname: 'Moldova',
    },
    {
        code: 'MG',
        countryname: 'Madagascar',
    },
    {
        code: 'MA',
        countryname: 'Morocco',
    },
    {
        code: 'UZ',
        countryname: 'Uzbekistan',
    },
    {
        code: 'MM',
        countryname: 'Myanmar',
    },
    {
        code: 'ML',
        countryname: 'Mali',
    },
    {
        code: 'MN',
        countryname: 'Mongolia',
    },
    {
        code: 'MK',
        countryname: 'Macedonia',
    },
    {
        code: 'MW',
        countryname: 'Malawi',
    },
    {
        code: 'MR',
        countryname: 'Mauritania',
    },
    {
        code: 'UG',
        countryname: 'Uganda',
    },
    {
        code: 'MY',
        countryname: 'Malaysia',
    },
    {
        code: 'MX',
        countryname: 'Mexico',
    },
    {
        code: 'IL',
        countryname: 'Israel',
    },
    {
        code: 'FR',
        countryname: 'France',
    },
    {
        code: 'XS',
        countryname: 'Somaliland',
    },
    {
        code: 'FI',
        countryname: 'Finland',
    },
    {
        code: 'FJ',
        countryname: 'Fiji',
    },
    {
        code: 'FK',
        countryname: 'Falkland Island.',
    },
    {
        code: 'NI',
        countryname: 'Nicaragua',
    },
    {
        code: 'NL',
        countryname: 'Netherlands',
    },
    {
        code: 'NO',
        countryname: 'Norway',
    },
    {
        code: 'NA',
        countryname: 'Namibia',
    },
    {
        code: 'VU',
        countryname: 'Vanuatu',
    },
    {
        code: 'NC',
        countryname: 'New Caledonia',
    },
    {
        code: 'NE',
        countryname: 'Niger',
    },
    {
        code: 'NG',
        countryname: 'Nigeria',
    },
    {
        code: 'NZ',
        countryname: 'New Zealand',
    },
    {
        code: 'NP',
        countryname: 'Nepal',
    },
    {
        code: 'XK',
        countryname: 'Kosovo',
    },
    {
        code: 'CI',
        countryname: "Côte d'Ivoire",
    },
    {
        code: 'CH',
        countryname: 'Switzerland',
    },
    {
        code: 'CO',
        countryname: 'Colombia',
    },
    {
        code: 'CN',
        countryname: 'China',
    },
    {
        code: 'CM',
        countryname: 'Cameroon',
    },
    {
        code: 'CL',
        countryname: 'Chile',
    },
    {
        code: 'XC',
        countryname: 'N. Cyprus',
    },
    {
        code: 'CA',
        countryname: 'Canada',
    },
    {
        code: 'CG',
        countryname: 'Congo',
    },
    {
        code: 'CF',
        countryname: 'Central African Rep.',
    },
    {
        code: 'CD',
        countryname: 'Dem. Rep. Congo',
    },
    {
        code: 'CZ',
        countryname: 'Czech Rep.',
    },
    {
        code: 'CY',
        countryname: 'Cyprus',
    },
    {
        code: 'CR',
        countryname: 'Costa Rica',
    },
    {
        code: 'CU',
        countryname: 'Cuba',
    },
    {
        code: 'SZ',
        countryname: 'Swaziland',
    },
    {
        code: 'SY',
        countryname: 'Syria',
    },
    {
        code: 'KG',
        countryname: 'Kyrgyzstan',
    },
    {
        code: 'KE',
        countryname: 'Kenya',
    },
    {
        code: 'SS',
        countryname: 'S. Sudan',
    },
    {
        code: 'SR',
        countryname: 'Suriname',
    },
    {
        code: 'KH',
        countryname: 'Cambodia',
    },
    {
        code: 'SV',
        countryname: 'El Salvador',
    },
    {
        code: 'SK',
        countryname: 'Slovakia',
    },
    {
        code: 'KR',
        countryname: 'Korea',
    },
    {
        code: 'SI',
        countryname: 'Slovenia',
    },
    {
        code: 'KP',
        countryname: 'Dem. Rep. Korea',
    },
    {
        code: 'KW',
        countryname: 'Kuwait',
    },
    {
        code: 'SN',
        countryname: 'Senegal',
    },
    {
        code: 'SL',
        countryname: 'Sierra Leone',
    },
    {
        code: 'KZ',
        countryname: 'Kazakhstan',
    },
    {
        code: 'SA',
        countryname: 'Saudi Arabia',
    },
    {
        code: 'SE',
        countryname: 'Sweden',
    },
    {
        code: 'SD',
        countryname: 'Sudan',
    },
    {
        code: 'DO',
        countryname: 'Dominican Rep.',
    },
    {
        code: 'DJ',
        countryname: 'Djibouti',
    },
    {
        code: 'DK',
        countryname: 'Denmark',
    },
    {
        code: 'DE',
        countryname: 'Germany',
    },
    {
        code: 'YE',
        countryname: 'Yemen',
    },
    {
        code: 'DZ',
        countryname: 'Algeria',
    },
    {
        code: 'US',
        countryname: 'United States',
    },
    {
        code: 'UY',
        countryname: 'Uruguay',
    },
    {
        code: 'LB',
        countryname: 'Lebanon',
    },
    {
        code: 'LA',
        countryname: 'Lao PDR',
    },
    {
        code: 'TW',
        countryname: 'Taiwan',
    },
    {
        code: 'TT',
        countryname: 'Trinidad and Tobago',
    },
    {
        code: 'TR',
        countryname: 'Turkey',
    },
    {
        code: 'LK',
        countryname: 'Sri Lanka',
    },
    {
        code: 'LV',
        countryname: 'Latvia',
    },
    {
        code: 'LT',
        countryname: 'Lithuania',
    },
    {
        code: 'LU',
        countryname: 'Luxembourg',
    },
    {
        code: 'LR',
        countryname: 'Liberia',
    },
    {
        code: 'LS',
        countryname: 'Lesotho',
    },
    {
        code: 'TH',
        countryname: 'Thailand',
    },
    {
        code: 'TF',
        countryname: 'Fr. S. Antarctic Lands',
    },
    {
        code: 'TG',
        countryname: 'Togo',
    },
    {
        code: 'TD',
        countryname: 'Chad',
    },
    {
        code: 'LY',
        countryname: 'Libya',
    },
    {
        code: 'AE',
        countryname: 'United Arab Emirates',
    },
    {
        code: 'VE',
        countryname: 'Venezuela',
    },
    {
        code: 'AF',
        countryname: 'Afghanistan',
    },
    {
        code: 'IQ',
        countryname: 'Iraq',
    },
    {
        code: 'IS',
        countryname: 'Iceland',
    },
    {
        code: 'IR',
        countryname: 'Iran',
    },
    {
        code: 'AM',
        countryname: 'Armenia',
    },
    {
        code: 'AL',
        countryname: 'Albania',
    },
    {
        code: 'AO',
        countryname: 'Angola',
    },
    {
        code: 'AR',
        countryname: 'Argentina',
    },
    {
        code: 'AU',
        countryname: 'Australia',
    },
    {
        code: 'AT',
        countryname: 'Austria',
    },
    {
        code: 'IN',
        countryname: 'India',
    },
    {
        code: 'TZ',
        countryname: 'Tanzania',
    },
    {
        code: 'AZ',
        countryname: 'Azerbaijan',
    },
    {
        code: 'IE',
        countryname: 'Ireland',
    },
    {
        code: 'ID',
        countryname: 'Indonesia',
    },
    {
        code: 'UA',
        countryname: 'Ukraine',
    },
    {
        code: 'QA',
        countryname: 'Qatar',
    },
    {
        code: 'MZ',
        countryname: 'Mozambique',
    },
];

export const asiacountries = [
    {
        code: 'BD',
        countryname: 'Bangladesh',
    },
    {
        code: 'MN',
        countryname: 'Mongolia',
    },
    {
        code: 'BN',
        countryname: 'Brunei',
    },
    {
        code: 'BH',
        countryname: 'Bahrain',
    },
    {
        code: 'BT',
        countryname: 'Bhutan',
    },
    {
        code: 'HK',
        countryname: 'Hong Kong',
    },
    {
        code: 'JO',
        countryname: 'Jordan',
    },
    {
        code: 'PS',
        countryname: 'Palestine',
    },
    {
        code: 'LB',
        countryname: 'Lebanon',
    },
    {
        code: 'LA',
        countryname: 'Lao PDR',
    },
    {
        code: 'TW',
        countryname: 'Taiwan',
    },
    {
        code: 'TR',
        countryname: 'Turkey',
    },
    {
        code: 'LK',
        countryname: 'Sri Lanka',
    },
    {
        code: 'TL',
        countryname: 'Timor-Leste',
    },
    {
        code: 'TM',
        countryname: 'Turkmenistan',
    },
    {
        code: 'TJ',
        countryname: 'Tajikistan',
    },
    {
        code: 'TH',
        countryname: 'Thailand',
    },
    {
        code: 'XC',
        countryname: 'N. Cyprus',
    },
    {
        code: 'NP',
        countryname: 'Nepal',
    },
    {
        code: 'PK',
        countryname: 'Pakistan',
    },
    {
        code: 'PH',
        countryname: 'Philippines',
    },
    {
        code: '-9',
        countryname: 'Siachen Glacier',
    },
    {
        code: 'AE',
        countryname: 'United Arab Emirates',
    },
    {
        code: 'CN',
        countryname: 'China',
    },
    {
        code: 'AF',
        countryname: 'Afghanistan',
    },
    {
        code: 'IQ',
        countryname: 'Iraq',
    },
    {
        code: 'JP',
        countryname: 'Japan',
    },
    {
        code: 'IR',
        countryname: 'Iran',
    },
    {
        code: 'AM',
        countryname: 'Armenia',
    },
    {
        code: 'SY',
        countryname: 'Syria',
    },
    {
        code: 'VN',
        countryname: 'Vietnam',
    },
    {
        code: 'GE',
        countryname: 'Georgia',
    },
    {
        code: 'IL',
        countryname: 'Israel',
    },
    {
        code: 'IN',
        countryname: 'India',
    },
    {
        code: 'AZ',
        countryname: 'Azerbaijan',
    },
    {
        code: 'ID',
        countryname: 'Indonesia',
    },
    {
        code: 'OM',
        countryname: 'Oman',
    },
    {
        code: 'KG',
        countryname: 'Kyrgyzstan',
    },
    {
        code: 'UZ',
        countryname: 'Uzbekistan',
    },
    {
        code: 'MM',
        countryname: 'Myanmar',
    },
    {
        code: 'SG',
        countryname: 'Singapore',
    },
    {
        code: 'KH',
        countryname: 'Cambodia',
    },
    {
        code: 'CY',
        countryname: 'Cyprus',
    },
    {
        code: 'QA',
        countryname: 'Qatar',
    },
    {
        code: 'KR',
        countryname: 'Korea',
    },
    {
        code: 'KP',
        countryname: 'Dem. Rep. Korea',
    },
    {
        code: 'KW',
        countryname: 'Kuwait',
    },
    {
        code: 'KZ',
        countryname: 'Kazakhstan',
    },
    {
        code: 'SA',
        countryname: 'Saudi Arabia',
    },
    {
        code: 'MY',
        countryname: 'Malaysia',
    },
    {
        code: 'YE',
        countryname: 'Yemen',
    },
];
