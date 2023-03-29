export interface Driver {
    id: number;
    name: string;
    type: string;
    drivers_size: number;
    link: string;
    loadspeaker_link: string;
    image: {
        url: string;
    },
    doc_files: {
        url: string;
    },
    brand: {
        name: string;
    },
    size: number;
    images: [{
        url: string
    }],
    glb_file: {
        url: string
    },
    frequency_range: string;
    spl: number;
    thiele_small: ThieleSmall;
    speakers: Speaker[];
}

export interface Speaker {
    id: number;
    conceptor_id: number;
    conceptor: {
        id: number;
        name: string;
        website: string;
    };
    sensitivity: number;
    name: string;
    type: string;
    acoustic_load: {
        id: number;
        name: string;
        link: string;
    };
    drivers: Driver[];
    driver_sizes: number[];
    short_desc: string;
    frequency_range: string;
    hpf: string;
    images: [{
        url: string
    }],
    glb_file: {
        url: string
    },
    hornsrep_file: {
        url: string
    },
    akabak_file: {
        url: string
    },
    plan_file: {
        url: string
    },
}

export interface Conceptor {
    id: number;
    name: string;
    website: string;
    desc: string;
    speakers: Speaker[];
}

export interface ThieleSmall {
    resonant_frequency: number;
    qes: number;
    qms: number;
    qts: number;
    vas: number;
    re: number;
    zmin: number;
    le: number;
    force_factor: number;
    rms: number;
    cms: number;
    mmd: number;
    mms: number;
    sd: number;
    xmax: number;
    xlim: number;
    xmaxvd: number;
    efficiency: number;
    ebp: number;
}