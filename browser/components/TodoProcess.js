/**
 * @fileoverview Percentage of todo achievement.
 */

import React, { PropTypes } from 'react'
import CSSModules from 'browser/lib/CSSModules'
import styles from './TodoProcess.styl'

const TodoProcess = ({
  todoState: {
    total: totalTodo,
    completed: completedTodo
  }
}) => (
  <div styleName='todo-process' style={{display: totalTodo > 0 ? '' : 'none'}}>
    <div styleName='todo-process-text'>
      <i className='fa fa-fw fa-tasks' />
      {completedTodo} of {totalTodo}
    </div>
    <div styleName='todo-process-bar'>
      <div styleName='todo-process-bar--inner' style={{width: parseInt(completedTodo / totalTodo * 100) + '%'}} />
    </div>
  </div>
)

TodoProcess.propTypes = {
  todoState: {
    total: PropTypes.number.isRequired,
    completed: PropTypes.number.isRequired
  }
}

export default CSSModules(TodoProcess, styles)
