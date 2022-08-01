import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: false,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    membersInvolved: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

eventSchema.virtual('eventStatus').get(function () {
  const now = new Date();
  const startDate = this.startDate;
  const endDate = this.endDate;
  if (endDate) {
    if (now < startDate) {
      return 'Upcoming';
    } else if (now > startDate && now < endDate) {
      return 'Ongoing';
    } else if (now > endDate) {
      return 'Ended';
    }
  } else {
    if (now < startDate) {
      return 'Upcoming';
    } else if (now > startDate) {
      return 'Ongoing';
    } else if (now > startDate) {
      return 'Ended';
    }
  }
});

export const Event = mongoose.model('Event', eventSchema);
