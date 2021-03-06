import {Account, GetExchangeRatesResponse, Transaction} from "./types";

export const MOCK_ACCOUNT: Account = {
    id: "031533d9-4990-4534-ae26-4da5daead89a",
    name: "BTC Wallet",
    primary: true,
    type: "wallet",
    currency: {
        code: "BTC",
        name: "Bitcoin",
        color: "#F7931A",
        sort_index: 100,
        exponent: 8,
        type: "crypto",
        address_regex:
            "^([13][a-km-zA-HJ-NP-Z1-9]{25,34})|^(bc1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]{39}|[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{59}))$",
        asset_id: "5b71fc48-3dd3-540c-809b-f8c94d0e68b5",
        slug: "bitcoin"
    },
    balance: {amount: "13.04015842", currency: "BTC"},
    created_at: "2020-03-11T22:13:20Z",
    updated_at: "2021-06-11T13:21:59Z",
    resource: "account",
    resource_path: "/v2/accounts/031533d9-4990-4534-ae26-4da5daead89a",
    allow_deposits: true,
    allow_withdrawals: true
};

export const MOCK_TRANSACTION: Transaction = {
    id: "568fe7aa-5633-4efe-9bc2-ca34edaa71c6",
    type: "send",
    status: "completed",
    amount: {amount: "-0.00000100", currency: "BTC"},
    native_amount: {amount: "-0.03", currency: "USD"},
    description: "Test transfer",
    created_at: "2021-06-12T13:35:28Z",
    updated_at: "2021-06-12T13:35:28Z",
    resource: "transaction",
    resource_path:
        "/v2/accounts/031533d9-4990-4534-ae26-4da5daead89a/transactions/568fe7aa-5633-4efe-9bc2-ca34edaa71c6",
    instant_exchange: false,
    off_chain_status: "completed",
    network: {status: "off_blockchain", status_description: null},
    to: {
        resource: "user",
        email: "joe@example.com",
        name: "joe@example.com",
        avatar_url: "https://images.coinbase.com/avatar?s=128",
        currency: "BTC"
    },
    idem: "5063d951-48e3-4dd1-b5b2-e351f44bb38d",
    details: {
        title: "Sent Bitcoin",
        subtitle: "To joe@example.com",
        header: "Sent 0.000001 BTC ($0.03)",
        health: "positive"
    },
    hide_native_amount: false
};

export const MOCK_EXCHANGE_RATES: GetExchangeRatesResponse = {
    currency: "USD",
    rates: {
        AED: "3.672977",
        AFN: "78.690739",
        ALL: "101.332647",
        AMD: "520.68152",
        ANG: "1.796445",
        AOA: "642",
        ARS: "95.0262",
        AUD: "1.293967",
        AWG: "1.8015",
        AZN: "1.700805",
        BAM: "1.610903",
        BBD: "2",
        BDT: "84.874884",
        BGN: "1.60985",
        BHD: "0.376592",
        BIF: "1979.274199",
        BMD: "1",
        BND: "1.324592",
        BOB: "6.975752",
        BRL: "5.0966",
        BSD: "1",
        BTN: "73.130174",
        BWP: "10.579679",
        BYN: "2.481715",
        BYR: "24817.149999999998",
        BZD: "2.017346",
        CAD: "1.21092",
        CDF: "1990.381736",
        CHF: "0.897422",
        CLF: "0.026155",
        CLP: "721.6",
        CNY: "6.3943",
        COP: "3612.534944",
        CRC: "619.592289",
        CUC: "1",
        CVE: "90.9",
        CZK: "20.883053",
        DJF: "178.165788",
        DKK: "6.131154",
        DOP: "56.967185",
        DZD: "133.869361",
        EGP: "15.6441",
        ERN: "15.001997",
        ETB: "43.713626",
        EUR: "0.824479",
        FJD: "2.03215",
        FKP: "0.707183",
        GBP: "0.707183",
        GEL: "3.155",
        GHS: "5.819627",
        GIP: "0.707183",
        GMD: "51.2",
        GNF: "9819.388091",
        GTQ: "7.736385",
        GYD: "209.386215",
        HKD: "7.76034",
        HNL: "24.044576",
        HRK: "6.1781",
        HTG: "92.075755",
        HUF: "285.524125",
        IDR: "14201.434817",
        ILS: "3.24895",
        INR: "73.12625",
        IQD: "1460.199708",
        ISK: "121.35",
        JMD: "149.622783",
        JOD: "0.709",
        JPY: "109.6315",
        KES: "107.89",
        KGS: "84.474803",
        KHR: "4078.383259",
        KMF: "404.249985",
        KRW: "1114.248061",
        KWD: "0.30082",
        KYD: "0.83402",
        KZT: "427.313595",
        LAK: "9450.867289",
        LBP: "1509.403907",
        LKR: "198.163133",
        LRD: "171.250032",
        LSL: "13.574935",
        LYD: "4.461585",
        MAD: "8.843195",
        MDL: "17.685116",
        MGA: "3789.68039",
        MKD: "50.756925",
        MMK: "1647.358236",
        MNT: "2847.636548",
        MOP: "7.999209",
        MRO: "356.999828",
        MUR: "40.879997",
        MVR: "15.465",
        MWK: "803.761835",
        MXN: "19.724892",
        MYR: "4.1095",
        MZN: "62.161997",
        NAD: "13.59",
        NGN: "412.67",
        NIO: "34.953709",
        NOK: "8.314471",
        NPR: "117.008192",
        NZD: "1.397268",
        OMR: "0.385015",
        PAB: "1",
        PEN: "3.898215",
        PGK: "3.559253",
        PHP: "47.746",
        PKR: "156.00337",
        PLN: "3.685581",
        PYG: "6717.860608",
        QAR: "3.6425",
        RON: "4.0554",
        RSD: "96.843788",
        RUB: "71.738",
        RWF: "1005.848462",
        SAR: "3.75144",
        SBD: "7.990443",
        SCR: "15.332756",
        SEK: "8.294265",
        SHP: "0.707183",
        SLL: "10323.699953",
        SOS: "578.937399",
        SRD: "20.983",
        SSP: "130.26",
        STD: "20517.592254",
        SVC: "8.75696",
        SZL: "13.574688",
        THB: "31.068",
        TJS: "11.414357",
        TMT: "3.51",
        TND: "2.737",
        TOP: "2.222538",
        TRY: "8.3974",
        TTD: "6.79175",
        TWD: "27.644",
        TZS: "2320.413",
        UAH: "27.043043",
        UGX: "3524.85954",
        UYU: "43.611009",
        UZS: "10605.715612",
        VES: "3127362.5",
        VND: "22987.889963",
        VUV: "108.429608",
        WST: "2.519965",
        XAF: "540.822516",
        XAG: "0.03551767",
        XAU: "0.00053027",
        XCD: "2.70255",
        XDR: "0.69271",
        XOF: "540.822516",
        XPD: "0.00035783",
        XPF: "98.386469",
        XPT: "0.00086376",
        YER: "250.125057",
        ZAR: "13.619446",
        ZMW: "22.586501",
        JEP: "0.707183",
        GGP: "0.707183",
        IMP: "0.707183",
        GBX: "19.44122044205447",
        CNH: "6.392439",
        MTL: "0.3988629613560623",
        TMM: "298.00130524571694",
        ZWL: "322",
        SGD: "1.324527",
        USD: "1.0",
        BTC: "2.6737964339844342e-05",
        BCH: "0.0016606468219371446",
        BSV: "0.005856529648879678",
        ETH: "0.0004058894560066566",
        ETH2: "0.0004058894560066566",
        ETC: "0.017001887209480253",
        LTC: "0.0058870279339475464",
        ZRX: "1.080696119598478",
        USDC: "1.0",
        BAT: "1.409421418413527",
        MANA: "1.3063007457017806",
        KNC: "0.5335040546308152",
        LINK: "0.04332119329093344",
        DNT: "6.489755920279838",
        MKR: "0.0003253478016802132",
        CVC: "3.572985372197886",
        OMG: "0.19528580076942603",
        DAI: "0.9986597985503455",
        ZEC: "0.007556008916090521",
        XRP: "1.1536831606017754",
        REP: "0.040257648953301126",
        XLM: "2.971927175896482",
        EOS: "0.1985900109224506",
        XTZ: "0.30236144286880534",
        ALGO: "0.9511580349074998",
        DASH: "0.005801254811415709",
        ATOM: "0.07903576368306658",
        OXT: "3.0627871362940273",
        COMP: "0.0030642418299652208",
        ENJ: "0.6791171477079797",
        REPV2: "0.040257648953301126",
        BAND: "0.1426177487788355",
        NMR: "0.023983317204552514",
        CGLD: "0.35850003585000356",
        UMA: "0.08220979940808945",
        LRC: "3.2025620496397114",
        YFI: "2.6655794656552747e-05",
        UNI: "0.043644679931739726",
        BAL: "0.041232837089266824",
        REN: "2.170609941393532",
        WBTC: "2.671921445509502e-05",
        NU: "3.3461602810774638",
        FIL: "0.013615204371025211",
        AAVE: "0.0031959347709713246",
        BNT: "0.24909702329057168",
        GRT: "1.515840533575868",
        SNX: "0.10651612387825207",
        STORJ: "0.9492168960607498",
        SUSHI: "0.10703773080010705",
        MATIC: "0.7388525619712586",
        SKL: "3.1060723714862557",
        ADA: "0.6596741209842337",
        ANKR: "11.220196353436185",
        CRV: "0.44798853149359374",
        ICP: "0.014866904041567866",
        NKN: "3.413551800648575",
        OGN: "1.1848341232227488",
        "1INCH": "0.34334763948497854",
        USDT: "0.9994503023337165",
        FORTH: "0.06259389083625438",
        CTSI: "1.6185033256278007",
        TRB: "0.020324996697188038",
        MIR: "0.2552648372686662",
        RLC: "0.2704530087897228",
        DOGE: "3.100294527980158",
        MLN: "0.010525540223351964",
        GTC: "0.07045974986788797",
        AMP: "12.408487405385284"
    }
};
