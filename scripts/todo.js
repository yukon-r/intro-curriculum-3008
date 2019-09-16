// Description:
//   TODO を管理することができるボットです

// Commands:
//   ボット名 todo     - TODO を作成
'use strict';
const todo = require('todo');
module.exports = (robot) => {
	robot.respond(/todo (.+)/i, (msg) => {
		const task = msg.match[1].trim();
		todo.todo(task);
		msg.send('追加しました: ' + task);
	});

//   ボット名 done     - TODO を完了にする
	robot.respond(/done (.+)/i, (msg) => {
		const task = msg.match[1].trim();
		todo.done(task);
		msg.send('完了にしました: ' + task);
	});

//   ボット名 del      - TODO を消す
	robot.respond(/del (.+)/i, (msg) => {
		const task = msg.match[1].trim();
		todo.del(task);
		msg.send('削除しました: ' + task);
	});

//   ボット名 list     - TODO の一覧表示
	robot.respond(/list/i, (msg) => {
    const list = todo.list();
    if (list.length === 0) {
      msg.send('(TODOはありません)');
    } else {
      msg.send(list.join('\n'));
    }
  });

//   ボット名 donelist - 完了した TODO の一覧表示
    robot.respond(/donelist/i, (msg) => {
    const donelist = todo.donelist();
    if (donelist.length === 0) {
      msg.send('(完了したTODOはありません)');
    } else {
      msg.send(donelist.join('\n'));
    }
  });
};
