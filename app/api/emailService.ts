const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendProgramEmail(to: string[], programPage: string): Promise<void> {
  try {
    const recipients = Array.isArray(to) ? to.join(',') : to;

    const msg = {
      to: recipients,
      from: {
        email: process.env.EMAIL_USER,
        name: 'Fit Gym',
      },
      subject: 'Your Free Plan is Ready! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; min-width: 100%; min-height: 100%; background-color: #f7f7f7; padding: 32px;">
          <div style="max-width: 600px; margin: 0 auto;">
            <div style="background-color: #ffffff; padding: 32px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <div style="width: 100%; padding-top: 50%; position: relative; background-color: #000000; color: #ffffff; background-image: url('https://firebasestorage.googleapis.com/v0/b/mymovies-5c2f4.appspot.com/o/gymfit1.png?alt=media&token=1a1b844b-44d6-4e5a-95ef-2683477f7ce0'); background-position: center; background-size: cover;">
              </div>
              <div style="padding: 32px 0; border-bottom: 1px solid #e0e0e0;">
                <h3 style="text-align: center; font-size: 24px; margin-bottom: 32px;">Subscribe For More</h3>
                <p style="padding-top: 16px; line-height: 1.6;">
                  <br><br> Thank you for signing up for our fitness program. You can access your personalized program page using the link below:<br><br>
                  <a href="https://fitgym.life/program/${programPage}" style="display: inline-block; background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%); color: #ffffff; text-decoration: none; padding: 16px; border-radius: 4px; text-align: center; width: 100%;">Click Here</a>
                </p>

                <h3 style="text-align: center; font-size: 24px; margin-bottom: 32px;">Our Monthly Plan</h3>
                <div style="border: 2px solid #d3d3d3; padding: 24px; margin-top: 32px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                  <p style="padding-top: 16px; line-height: 1.6; text-align: center; font-size: 18px; color: #333;">
                    Our subscription includes a full consultation and a customized plan tailored to your needs.
                  </p>
                  <p style="text-align: center; margin-top: 24px;">
                    <a href="https://fitgym.life" style="display: inline-block; background: linear-gradient(90deg, rgba(255,94,0,1) 0%, rgba(255,154,0,1) 100%); color: #ffffff; text-decoration: none; padding: 16px; border-radius: 4px; text-align: center; width: auto;">Subscribe Now for $29.99/month</a>
                  </p>
                </div>
              </div>
              <div style="margin-top: 32px; text-align: center; color: #666666;">
                <h3 style="font-size: 16px; margin-bottom: 16px;">Thanks for using Fit Gym!</h3>
                <p>www.fitgym.life</p>
              </div>
            </div>
            <div style="text-align: center; color: #666666; margin-top: 32px;">
              <div style="display: flex; justify-content: center; margin-bottom: 16px;">
                <a href="#" style="display: flex; align-items: center; justify-content: center; margin-right: 16px; background-color: #000000; color: #ffffff; border-radius: 50%; width: 32px; height: 32px; text-decoration: none;"><i class="fab fa-facebook-f"></i></a>
                <a href="#" style="display: flex; align-items: center; justify-content: center; margin-right: 16px; background-color: #000000; color: #ffffff; border-radius: 50%; width: 32px; height: 32px; text-decoration: none;"><i class="fab fa-instagram"></i></a>
                <a href="#" style="display: flex; align-items: center; justify-content: center; background-color: #000000; color: #ffffff; border-radius: 50%; width: 32px; height: 32px; text-decoration: none;"><i class="fab fa-twitter"></i></a>
              </div>
              <div>
                <p style="line-height: 1.6;">
                  Questions or concerns? <a href="#" style="color: #333333;">sarah.cummingss96@gmail.com</a><br>
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
