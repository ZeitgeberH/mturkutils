import math
import numpy as np

from mturkutils.base import Experiment

#userids = ['A3485IQYNO94GA', 'A1JVUD5XUB9H48', 'A28V5XY8A0R6Q5', 'A364RJUWQ77TDQ']
#AVUB4GDC2GE48 AAKFUMPLS0U6N AOAZMLP27GD81 A2ALDZVPEAQW62

userid = 'AVUB4GDC2GE48'

class CompensationExperiment(Experiment):
    def createTrials(self):
        self._trials = {'acceptID': [userid]}

from boto.mturk.qualification import Requirement


from boto.mturk.connection import MTurkConnection
conn = MTurkConnection(aws_access_key_id="AKIAI7LNZISMTBL77M3Q", aws_secret_access_key="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")


name = "DiCarlo Lab Special Compensation %s, 3" % userid
description = name

qual_type = conn.create_qualification_type(name, description, 'Active')
qtypeid = qual_type[0].QualificationTypeId
print(qtypeid)
req = Requirement(qtypeid, 'Exists')
conn.assign_qualification(qtypeid, userid, value=1, send_notification=True)

exp = CompensationExperiment(htmlsrc = 'compensate.html',
                              htmldst = 'compensate_n%04d.html',
                              sandbox = False,
                              title = 'Special Compensation for %s, New' % userid,
                              reward = 0,
                              duration = 3500,
                              description = "***Compensation for invited workers only***",
                              comment = "compensation, reimbursement",
                              collection_name = None,
                              max_assignments=1,
                              bucket_name='dicarlo_special_compensation',
                              trials_per_hit=1,
                              other_quals=[req])


if __name__ == '__main__':

    exp.createTrials()
    exp.prepHTMLs()
    exp.testHTMLs()
    exp.uploadHTMLs()
    exp.createHIT(secure=True)
