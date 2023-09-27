



export default function formatDateTime(dateTimeString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
  
    const dateTime = new Date(dateTimeString);
    return new Intl.DateTimeFormat('en-US', options).format(dateTime);
  }