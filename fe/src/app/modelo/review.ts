export class Review {
    constructor(
        public state: Number,
        public observations: String,
        public date_review: Date,
        public profileId: String,                
    ){}
}