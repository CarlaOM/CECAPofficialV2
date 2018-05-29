export class Review {
    constructor(
        public date_review: Date,
        public state: Number,
        public observations: String,
        public profileId: String,                
    ){}
}