import React from 'react'
import { connect } from 'react-redux'

function Tasks(props) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-green">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-3">
              <i className="fa fa-tasks fa-5x" />
            </div>
            <div className="col-xs-9 text-right">
              <div className="huge">{props.newTasks}</div>
              <div>New Tasks!</div>
            </div>
          </div>
        </div>
        <a href="#">
          <div className="panel-footer">
            <span className="pull-left">View Details</span>
            <span className="pull-right">
              <i className="fa fa-arrow-circle-right" />
            </span>
            <div className="clearfix" />
          </div>
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  newTasks: state.newTasks
})

export default connect(mapStateToProps)(Tasks)
