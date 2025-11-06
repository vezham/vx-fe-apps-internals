// import * as moment from 'moment'

// const DateFormat = 'YYYY-MM-DD'
// const TimeFormat = 'HH:mm:ss'
// const DateTimeFormat = 'YYYY-MM-DDTHH:mm:ss'

// const ParseField = {
//   date: (data: string) => {
//     return moment(data, DateFormat).format(DateFormat) // wjdlz/TODO: .format(DateFormat) will be done based on settings
//   },
//   time: (data: string) => {
//     return moment(data, TimeFormat).format(TimeFormat)
//   },
//   datetime: (data: string) => {
//     return moment(data, DateTimeFormat).format(DateTimeFormat)
//   }
// }

// const ToMoment = {
//   date: (data: any) => {
//     return data ? moment(data, DateFormat) : null
//   },
//   time: (data: any) => {
//     return data ? moment(data, TimeFormat) : null
//   },
//   datetime: (data: any) => {
//     return data ? moment(data.replace('Z', ''), DateTimeFormat) : null
//   }
// }

// const FormatToServer = {
//   date: (data: any) => {
//     return data?.format(DateFormat)
//   },
//   time: (data: any) => {
//     return data?.format(TimeFormat)
//   },
//   datetime: (data: any) => {
//     return data?.format(DateTimeFormat) + 'Z'
//   }
// }

const formatDate = (input: string | number) => {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

const toEstimateTime = (input: string | number) => {
  const time = Number(input)
  const min = Math.floor(time / 60)

  return `${min} ${min === 1 ? 'min' : 'mins'}`
}

export {
  // DateFormat,
  // DateTimeFormat,
  // FormatToServer,
  // ParseField,
  // TimeFormat,
  // ToMoment,
  formatDate,
  toEstimateTime
}
