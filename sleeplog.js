/*
let sleeplog = `2019-11-17 00:00:00,就寝,22:14:57
2019-11-17 01:00:00,起床,13:44:13
2019-11-17 02:00:00,就寝,6:01:48
2019-11-17 03:00:00,起床,13:44:13
2019-11-17 04:00:00,就寝,6:01:48
2019-11-17 05:00:00,起床,13:44:13
2019-11-17 06:00:00,就寝,6:01:48
2019-11-17 07:00:00,起床,13:44:13
2019-11-17 08:00:00,就寝,6:01:48
2019-11-17 09:00:00,起床,13:44:13
2019-11-17 10:00:00,就寝,6:01:48
2019-11-17 11:00:00,起床,13:44:13
2019-11-17 12:00:00,就寝,6:01:48
2019-11-17 13:00:00,起床,13:44:13
2019-11-17 14:00:00,就寝,6:01:48
2019-11-17 15:00:00,起床,13:44:13
2019-11-17 16:00:00,就寝,6:01:48
2019-11-17 17:00:00,起床,13:44:13
2019-11-17 18:00:00,就寝,6:01:48
2019-11-17 19:00:00,起床,13:44:13
2019-11-17 20:00:00,就寝,6:01:48
2019-11-17 21:00:00,起床,14:29:23
2019-11-17 22:00:00,就寝,6:01:48
2019-11-17 23:00:00,起床,14:29:23
2019-11-18 00:00:00,就寝,14:12:25
2019-11-20 21:00:00,起床,14:29:23
2019-11-21 05:00:00,就寝,14:12:25
2019-11-22 21:00:00,起床,14:29:23
2019-11-23 05:00:00,就寝,14:12:25
2019-11-24 21:00:00,起床,14:29:23`
*/
sleeplog = `2019-7-20 17:00:00,就寝,0:00:0-30464
2019-7-20 21:00:00,起床,4:00:00
2019-7-21 12:44:08,就寝,15:44:08
2019-7-22 02:18:16,起床,13:34:08
2019-7-22 14:51:39,就寝,12:33:23
2019-7-22 20:54:13,起床,6:02:34
2019-7-22 23:14:05,就寝,2:19:52
2019-7-23 12:05:22,起床,12:51:17
2019-7-23 15:00:37,就寝,2:55:15
2019-7-24 04:53:44,起床,13:53:07
2019-7-25 00:28:46,就寝,19:35:02
2019-7-25 10:21:08,起床,9:52:22
2019-7-25 12:00:00,就寝,1:38:52
2019-7-25 16:00:08,起床,4:00:08
2019-7-26 01:18:26,就寝,9:18:18
2019-7-26 13:11:29,起床,11:53:03
2019-7-27 02:56:21,就寝,13:44:52
2019-7-27 11:56:59,起床,9:00:38
2019-7-27 14:00:00,就寝,2:03:01
2019-7-27 20:00:00,起床,6:00:00
2019-7-28 07:27:50,就寝,11:27:50
2019-7-28 17:22:29,起床,9:54:39
2019-7-28 22:00:00,就寝,4:37:31
2019-7-29 07:25:10,起床,9:25:10
2019-7-29 08:00:00,就寝,0:34:50
2019-7-29 11:37:34,起床,3:37:34
2019-7-29 22:58:30,就寝,11:20:56
2019-7-30 13:03:57,起床,14:05:27
2019-7-30 23:28:31,就寝,10:24:34
2019-7-31 05:39:35,起床,6:11:04
2019-7-31 20:37:18,就寝,14:57:43
2019-8-1 11:01:17,起床,14:23:59
2019-8-2 00:23:09,就寝,13:21:52
2019-8-2 10:23:46,起床,10:00:37
2019-8-2 11:00:00,就寝,0:36:14
2019-8-2 15:57:42,起床,4:57:42
2019-8-2 23:07:40,就寝,7:09:58
2019-8-3 18:38:26,起床,19:30:46
2019-8-4 00:03:16,就寝,5:24:50
2019-8-4 17:00:00,起床,16:02:10
2019-8-5 00:10:53,就寝,7:10:53
2019-8-5 13:34:58,起床,13:24:05
2019-8-5 20:13:51,就寝,6:38:53
2019-8-6 03:00:00,起床,6:46:09
2019-8-6 19:43:12,就寝,16:43:12
2019-8-7 03:15:00,起床,7:31:48
2019-8-7 23:02:41,就寝,19:47:41
2019-8-8 12:21:37,起床,13:18:56
2019-8-8 18:06:13,就寝,5:44:36
2019-8-9 07:56:04,起床,13:49:51
2019-8-10 00:41:05,就寝,16:45:01
2019-8-10 14:11:13,起床,13:30:08
2019-8-10 21:56:37,就寝,7:45:24
2019-8-11 11:06:30,起床,13:09:53
2019-8-12 02:25:21,就寝,15:18:51
2019-8-12 11:05:39,起床,8:40:18
2019-8-12 11:30:00,就寝,0:24:21
2019-8-12 15:08:35,起床,3:38:35
2019-8-12 22:32:00,就寝,7:23:25
2019-8-13 10:11:26,起床,11:39:26
2019-8-14 04:15:21,就寝,18:03:55
2019-8-14 15:05:58,起床,10:50:37
2019-8-14 20:07:20,就寝,5:01:22
2019-8-15 10:48:52,起床,14:41:32
2019-8-15 12:00:00,就寝,1:11:08
2019-8-15 18:46:35,起床,6:46:35
2019-8-16 00:16:07,就寝,5:29:32
2019-8-16 08:14:37,起床,7:58:30
2019-8-17 00:18:48,就寝,16:04:11
2019-8-17 13:47:48,起床,13:29:00
2019-8-17 22:38:45,就寝,8:50:57
2019-8-18 14:26:37,起床,15:47:52
2019-8-18 19:13:55,就寝,4:47:18
2019-8-19 05:30:02,起床,10:16:07
2019-8-20 02:18:07,就寝,20:48:05
2019-8-20 21:10:02,起床,18:51:55
2019-8-20 23:01:13,就寝,1:51:11
2019-8-21 11:19:42,起床,12:18:29
2019-8-21 23:21:08,就寝,0:46:21
2019-8-22 12:07:01,起床,12:45:53
2019-8-22 18:01:04,就寝,5:54:03
2019-8-23 05:46:53,起床,11:45:49
2019-8-24 07:06:12,就寝,25:19:19
2019-8-24 14:15:59,起床,7:09:47
2019-8-24 21:00:29,就寝,6:44:30
2019-8-25 03:47:27,起床,6:46:58
2019-8-25 21:41:03,就寝,17:53:36
2019-8-26 06:17:38,起床,8:36:35
2019-8-26 23:46:52,就寝,17:29:14
2019-8-27 10:57:34,起床,11:10:42
2019-8-27 13:58:15,就寝,3:00:41
2019-8-27 20:26:51,起床,6:28:36
2019-8-27 23:02:26,就寝,2:35:35
2019-8-28 10:08:15,起床,11:05:49
2019-8-28 17:52:32,就寝,7:44:17
2019-8-29 04:06:22,起床,10:13:50
2019-8-30 01:18:16,就寝,21:11:54
2019-8-30 13:27:50,起床,12:09:34
2019-8-31 06:30:10,就寝,17:02:20
2019-8-31 15:16:29,起床,8:46:19
2019-9-1 05:15:48,就寝,13:59:19
2019-9-1 13:47:23,起床,8:31:35
2019-9-1 22:07:59,就寝,8:20:36
2019-9-2 15:45:10,起床,17:37:11
2019-9-2 23:09:12,就寝,7:24:02
2019-9-3 14:16:36,起床,15:07:24
2019-9-3 19:09:18,就寝,4:52:42
2019-9-4 02:00:00,起床,6:50:42
2019-9-5 00:54:08,就寝,22:54:08
2019-9-5 08:52:32,起床,7:58:24
2019-9-6 03:37:22,就寝,18:44:50
2019-9-6 13:35:24,起床,9:58:02
2019-9-6 18:41:01,就寝,5:05:37
2019-9-6 20:14:35,起床,1:33:34
2019-9-6 21:35:43,就寝,1:21:08
2019-9-7 05:25:56,起床,7:50:13
2019-9-7 23:52:27,就寝,18:26:31
2019-9-8 11:03:11,起床,11:10:44
2019-9-8 21:21:29,就寝,10:18:18
2019-9-9 10:30:21,起床,13:08:52
2019-9-10 02:30:00,就寝,15:59:39
2019-9-10 13:22:56,起床,10:52:56
2019-9-11 01:49:59,就寝,12:27:03
2019-9-11 10:53:36,起床,9:03:37
2019-9-12 01:04:34,就寝,14:10:58
2019-9-12 10:16:34,起床,9:12:00
2019-9-13 02:52:36,就寝,16:36:02
2019-9-13 09:14:17,起床,6:21:41
2019-9-14 02:20:25,就寝,17:06:08
2019-9-14 14:48:54,起床,12:28:29
2019-9-15 01:57:31,就寝,11:08:37
2019-9-15 12:47:50,起床,10:50:19
2019-9-16 00:12:19,就寝,11:24:29
2019-9-16 13:41:09,起床,13:28:50
2019-9-17 02:36:01,就寝,12:54:52
2019-9-17 13:45:27,起床,11:09:26
2019-9-17 18:55:34,就寝,5:10:07
2019-9-17 23:56:57,起床,5:01:23
2019-9-19 02:50:42,就寝,26:53:45
2019-9-19 15:02:58,起床,12:12:16
2019-9-20 04:34:09,就寝,13:31:11
2019-9-20 16:56:00,起床,12:21:51
2019-9-21 00:34:08,就寝,7:38:08
2019-9-21 14:38:49,起床,14:04:41
2019-9-21 20:18:15,就寝,5:39:26
2019-9-22 08:13:21,起床,11:55:06
2019-9-23 03:10:50,就寝,18:57:29
2019-9-23 13:30:32,起床,10:19:42
2019-9-24 06:54:27,就寝,17:23:55
2019-9-24 18:13:35,起床,11:19:08
2019-9-25 03:23:41,就寝,9:10:06
2019-9-25 13:52:08,起床,10:28:27
2019-9-26 00:31:32,就寝,10:39:24
2019-9-26 14:20:19,起床,13:48:47
2019-9-27 02:55:11,就寝,12:34:52
2019-9-27 15:21:18,起床,12:26:07
2019-9-28 20:45:11,就寝,29:23:53
2019-9-29 15:37:34,起床,18:52:23
2019-9-30 00:13:26,就寝,8:35:52
2019-9-30 14:09:36,起床,13:56:10
2019-10-1 00:57:21,就寝,10:47:45
2019-10-1 07:44:19,起床,6:46:58
2019-10-2 01:37:34,就寝,17:53:15
2019-10-2 14:30:44,起床,12:53:10
2019-10-2 22:47:25,就寝,8:16:41
2019-10-3 11:55:05,起床,13:07:40
2019-10-3 17:48:18,就寝,5:53:13
2019-10-4 01:55:21,起床,8:07:03
2019-10-5 01:23:04,就寝,23:27:43
2019-10-6 01:01:51,就寝,23:38:47
2019-10-6 16:36:43,起床,15:34:52
2019-10-7 00:22:10,就寝,7:45:27
2019-10-7 12:16:30,起床,11:54:20
2019-10-8 05:51:20,就寝,17:34:50
2019-10-8 17:40:55,起床,11:49:35
2019-10-9 00:08:59,就寝,6:28:04
2019-10-9 13:23:13,起床,13:14:14
2019-10-9 15:54:31,就寝,2:31:18
2019-10-9 19:59:31,起床,4:05:00
2019-10-9 20:29:05,就寝,0:29:34
2019-10-9 21:00:03,起床,0:30:58
2019-10-11 04:30:00,就寝,31:29:57
2019-10-11 04:30:01,起床,0:00:01
2019-10-11 07:08:42,就寝,2:38:41
2019-10-11 17:54:02,起床,10:45:20
2019-10-11 22:47:11,就寝,4:53:09
2019-10-12 12:24:14,起床,13:37:03
2019-10-13 01:32:05,就寝,13:07:51
2019-10-13 11:00:19,起床,9:28:14
2019-10-14 23:14:59,就寝,36:14:40
2019-10-15 15:48:23,起床,16:33:24
2019-10-16 02:18:21,就寝,10:29:58
2019-10-16 13:36:50,起床,11:18:29
2019-10-17 02:16:16,就寝,12:39:26
2019-10-18 05:54:26,起床,27:38:10
2019-10-20 03:24:05,就寝,45:29:39
2019-10-20 14:50:08,起床,11:26:03
2019-10-21 02:45:02,就寝,11:54:54
2019-10-21 13:32:46,起床,10:47:44
2019-10-22 10:00:00,就寝,20:27:14
2019-10-22 20:00:00,起床,10:00:00
2019-10-23 11:41:05,就寝,15:41:05
2019-10-23 22:25:08,起床,10:44:03
2019-10-24 13:27:25,就寝,15:02:17
2019-10-24 14:25:59,起床,0:58:34
2019-10-24 17:01:40,就寝,2:35:41
2019-10-25 14:00:15,起床,20:58:35
2019-10-26 02:07:40,就寝,12:07:25
2019-10-26 09:47:09,起床,7:39:29
2019-10-27 02:18:40,就寝,16:31:31
2019-10-27 13:49:43,起床,11:31:03
2019-10-28 01:15:11,就寝,11:25:28
2019-10-28 15:07:33,起床,13:52:22
2019-10-29 00:25:07,就寝,9:17:34
2019-10-29 08:25:39,起床,8:00:32
2019-10-29 21:06:48,就寝,12:41:09
2019-10-30 07:46:05,起床,10:39:17
2019-10-31 01:39:34,就寝,17:53:29
2019-10-31 12:16:03,起床,10:36:29
2019-10-31 23:07:04,就寝,10:51:01
2019-11-1 07:47:45,起床,8:40:41
2019-11-1 18:49:23,就寝,11:01:38
2019-11-2 06:51:59,起床,12:02:36
2019-11-2 15:39:55,就寝,8:47:56
2019-11-2 21:02:07,就寝,5:22:12
2019-11-4 00:19:09,就寝,27:17:02
2019-11-4 12:11:29,起床,11:52:20
2019-11-5 00:29:56,就寝,12:18:27
2019-11-5 12:19:47,起床,11:49:51
2019-11-6 00:00:41,就寝,11:40:54
2019-11-7 00:02:57,就寝,24:02:16
2019-11-7 11:56:30,起床,11:53:33
2019-11-8 01:13:02,就寝,13:16:32
2019-11-8 11:24:27,起床,10:11:25
2019-11-8 23:51:49,就寝,12:27:22
2019-11-9 10:40:09,起床,10:48:20
2019-11-10 03:00:42,就寝,16:20:33
2019-11-10 13:58:18,起床,10:57:36
2019-11-11 02:47:46,就寝,12:49:28
2019-11-11 12:37:18,起床,9:49:32
2019-11-12 00:44:11,就寝,12:06:53
2019-11-12 11:50:31,起床,11:06:20
2019-11-13 00:43:20,就寝,12:52:49
2019-11-13 11:33:47,起床,10:50:27
2019-11-13 22:19:38,就寝,10:45:51
2019-11-14 12:23:37,起床,14:03:59
2019-11-14 18:52:42,就寝,6:29:05
2019-11-15 05:51:10,起床,10:58:28
2019-11-15 17:56:18,就寝,12:05:08
2019-11-16 01:07:23,起床,7:11:05
2019-11-16 23:22:20,就寝,22:14:57
2019-11-17 13:06:33,起床,13:44:13
2019-11-17 19:08:21,就寝,6:01:48
2019-11-18 09:37:44,起床,14:29:23
2019-11-18 23:50:09,就寝,14:12:25`


sleeplog = sleeplog.split('\n')

let day = new Date(sleeplog[0].split(' ')[0])
for(let i=0;day.getTime()<=(new Date(sleeplog[sleeplog.length-1].split(' ')[0])).getTime();day.setDate(day.getDate()+1)){
  d = day.toJSON().replace(/\-|T.+$/gi,'')
  $('#graphArea').append(`<div id="d${d}" class="dayBase">${d}<br></div>`)
}


for(let i=0;i<sleeplog.length;i=i+2){
  if(sleeplog[i].match(/起床/)){
    i--
    continue
  }
  let data = sleeplog[i].split(',')
  let time = new Date(data[0])
  let date = new Date(data[0].split(' ')[0])
  let day = date.toJSON().replace(/\-|T.+$/gi,'')
  let p = ( (time.getTime()-date.getTime()) / 86400000 +0.375)*100
  $(`#d${day}`).append(`<div id="${time.getTime()}" class="sleeplogGraph">aa</div>`)
  $(`#${time.getTime()}`).css('left',`${p}%`)

//ここ就寝二回打ってるのがあるとコケるからそれを治す

  let data2 = sleeplog[i+1].split(',')
  let time2 = new Date(data2[0])
  let date2 = new Date(data2[0].split(' ')[0])
  let day2 = date2.toJSON().replace(/\-|T.+$/gi,'')
  let p2 = ( (time2.getTime()-date2.getTime()) / 86400000 +0.375)*100
  console.log(`${!! (day === day2)} ${p} ${p2}`)
  if(day === day2){
    $(`#${time.getTime()}`).css('width',`${p2-p}%`).text('a')
  }else{
    $(`#${time.getTime()}`).css('width',`${100-p}%`).text('b')
    $(`#d${day2}`).append(`<div id="${time2.getTime()}" class="sleeplogGraph">aa</div>`)
    $(`#${time2.getTime()}`).css('left',`0%`).css('right',`${100-p2}%`)
    console.log(`b ${p}`)
  }
}