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
    { label: 'World', image: images.gl, url: '#' },
    { label: 'Indonesia', image: images.id, url: '#' },
    { label: 'Malaysia', image: images.my, url: '#' },
    { label: 'Singapore', image: images.sg, url: '#' },
    { label: 'Philippines', image: images.ph, url: '#' },
    { label: 'Vietnam', image: images.vn, url: '#' },
    { label: 'Thailand', image: images.th, url: '#' },
];
export const banks = [
    { name: 'ATM BERSAMA', img: bankimgs.atmBersama, bgcolor: '#3171B8' },
    { name: 'PRIMA', img: bankimgs.prima, bgcolor: '#274F8C' },
    { name: 'BCA', img: bankimgs.bca, bgcolor: '#123293' },
    { name: 'MANDIRI', img: bankimgs.mandiri, bgcolor: '#163C75' },
    { name: 'BNI', img: bankimgs.bni, bgcolor: '#327494' },
    { name: 'BRI', img: bankimgs.bri, bgcolor: '#284291' },
    { name: 'MAYBANK', img: bankimgs.maybank, bgcolor: '#F1BE46' },
    { name: 'CIMB', img: bankimgs.cimb, bgcolor: '#DB4433' },
    { name: 'MASTER', img: bankimgs.masterCard, bgcolor: '#FFF' },
    { name: 'VISA', img: bankimgs.visa, bgcolor: '#FFF' },
    { name: 'JBC', img: bankimgs.jbc, bgcolor: '#FFF' },
    { name: 'AMEX', img: bankimgs.amex, bgcolor: '#FFF' },
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
